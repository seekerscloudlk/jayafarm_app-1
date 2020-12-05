import { Platform, ToastController, Events} from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { FormGroup} from '@angular/forms';
import { StorageService, Trip, TripItem, Rep } from './storage.service'
import { ApiCallerService } from './api-caller.service'
// import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const REP_KEY = '_jf_app_rep_key_';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    public svr_url: string;
    authenticationState = new BehaviorSubject(false);
    
    constructor(
        private storage: Storage, 
        private storageService: StorageService,
        private plt: Platform,
        public toastController: ToastController,
        private http: HttpClient,
        public event: Events,
        public apiService: ApiCallerService
    ) { 
        this.svr_url = this.storageService.svr_url;
        this.plt.ready().then(() => {
        this.checkToken();
        });
    }
    
    /**
     * Check rep info object is stored in the local storage
     */
    checkToken() {
        this.storage.get(REP_KEY).then(rep => {
        if (rep) {
            this.authenticationState.next(true);
            this.event.publish('repData',rep);
        }
        })
    }
    
    login(repid: string, pwd: string): boolean {
        if (!navigator.onLine) {
            this.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } else {
            let url = this.svr_url+"RepCtrl/signIn/"+repid+"/"+pwd;
            const ParseHeaders = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
        };

        this.http.post(url, null, ParseHeaders).subscribe((data: any) => {
            console.log(data)
            if (data['rep_info'] != 0) { // Rep login credentials are not matched
            
                if (data['routes'] != 0) {  // Rep has not assigned to any route
                    // console.log(data['opened_trips_count'] +" != " +0 +": "+(Number(data['opened_trips']) != 0))  
                    if(Number(data['opened_trips_count']) != 0){ //Rep doesn't have any opened trip
                    
                        if (data['opened_trips_count'] > 1) {
                            this.showToast("<b>"+data['rep_info'][0]['rep_fname']+", you have more than one started trips..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration..");
                        } else {
                            let rep = <Rep>{
                            repID: parseInt(repid),
                            repEmail: data['rep_info'][0]['rep_email'],
                            repFname: data['rep_info'][0]['rep_fname'],
                            repLname: data['rep_info'][0]['rep_lname'],
                            repTp: data['rep_info'][0]['rep_tp'],
                            repRoutes: data['routes']
                            }
                            this.setRep(rep);

                            this.showToast("Login successful..<ion-icon name='checkmark'></ion-icon></b>");
                        }
                    } else {
                        this.showToast("<b>"+data['rep_info'][0]['rep_fname']+", you have no started trip..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration..");
                    }
                } else {
                    this.showToast("<b>"+data['rep_info'][0]['rep_fname']+", you are not allocated to any route..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration..");
                }
            }  else{
                this.showToast("<b>Invalid Credentials..<ion-icon name='warning'></ion-icon></b><br>Please re-check and try again..");
            }
        },
        (error: any) => {
            console.log(error);
        });
        return this.isAuthenticated();
        }
    }
    


 
    logout() {
        return this.storage.remove(REP_KEY).then(() => {
        this.authenticationState.next(false);
        });
    }
    
    isAuthenticated() {
        return this.authenticationState.value;
    }

    async showToast(msg) {
        const toast = await this.toastController.create({
            mode: "ios",
            message: msg,
            duration: 4000
        });
        toast.present();
    }

    getRep(): Promise<Rep>{
        return this.storage.get(REP_KEY)
    }

    setRep(rep: Rep) {
        this.storage.set(REP_KEY, rep).then(() => {
            this.authenticationState.next(true);
            this.event.publish('repData',rep);
        });
    }

 
}