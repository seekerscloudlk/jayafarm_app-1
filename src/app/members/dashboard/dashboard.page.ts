import { AuthenticationService } from './../../services/authentication.service';
import { StorageService, Rep } from './../../services/storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, IonList, Platform} from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

import { CustInfoPage } from '../inc/cust-info/cust-info.page';
import { AddOrderPage } from '../inc/add-order/add-order.page';
import { OrderHistoryPage } from '../inc/order-history/order-history.page';
import { CustAddPage } from '../inc/cust-add/cust-add.page';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
    private routes: any[];
    private currRootId: any;
    private currRootCusts: any[];
    private isRootCustAvail: boolean = false;
    private submitting: boolean;
    private repId: number;
    private tmpCurrTripId: number = -1;
    private currCustomer: number;
    private isRootSelected: boolean = false;
    private rep: Rep;
    customPopoverOptions: any = {
        subHeader: 'Route',
        message: 'Select current route'
    };

    @ViewChild('custList', {static: false}) custList: IonList;
    constructor(
        private authService: AuthenticationService,
        public router: Router, 
        public formBuilder: FormBuilder, 
        public toast: ToastController,
        private http: HttpClient,
        private storage: StorageService,
        public modalController: ModalController,
        private plt: Platform
        ) { 
        
    }
 
    ngOnInit() {
        this.plt.ready().then(() => {
            document.addEventListener("backbutton",function(e) {}, false);
            this.checkAndUpdateRep();
        })
    }


    async openAddCust(){
        const modal = await this.modalController.create({
            component: CustAddPage,
            componentProps: {
                currRootId: this.currRootId,
            }
        });
        modal.present(); 
        let ret = await modal.onWillDismiss();
        let isAdd = ret.data.isAdded;
        if (isAdd) {
            console.log(isAdd);
            this.setRouteCusts();
        }
    }


    checkAndUpdateRep() {

        this.authService.getRep().then(rep=>{
            this.rep = rep;
            this.routes = rep.repRoutes;
            this.repId = rep.repID;
            // this.checkAndSyncCurrTrip(rep);
            this.getSVROpenedTripId();  //set current opened trip id from server

            console.log(rep)
            if (!rep.currOpenedTripId) {
                rep.currOpenedTripId = this.tmpCurrTripId;
            } else {
                if (rep.currOpenedTripId != this.tmpCurrTripId && this.tmpCurrTripId != -1) {
                    rep.currOpenedTripId = this.tmpCurrTripId;
                    this.authService.setRep(rep); //update local rep on local storage
                }
            }
            // console.log(rep)
        })
    }


    async addOrder(customer: any){
        // console.log(customer)
        if(this.istmpCurrTripIdSet()){
            const modal = await this.modalController.create({
                component: AddOrderPage,
                componentProps: {
                    customer: customer,
                    tripId: this.tmpCurrTripId,
                    // repId: this.repId,
                    rep: this.rep
                }
            });
            return await modal.present();
        } else{
            this.showToast("Please set the current opened trip first..<ion-icon name='warning'>\
            </ion-icon></b><br><b>Hint: </b> Refresh the trip (tap the Bicycle Icon) and try again..");
        }
    }

    async openHistory(cust_id: number){
        const modal = await this.modalController.create({
            component: OrderHistoryPage,
            componentProps: {
                custId: cust_id,
            }
        });
        return await modal.present();
    }

    isRouteSet(){
        return (this.routes == null) 
    }
    
    logout() {
        this.authService.logout();
    }

    setRouteCusts(){
        console.log(this.currRootId);
        this.getCurrRoutCustomerInfo();

    }

    async openCustInfo(cust: any) {
        const modal = await this.modalController.create({
            component: CustInfoPage,
            componentProps: {
                custData: cust
            }
        });
        return await modal.present();
    }

    istmpCurrTripIdSet(): boolean{
        return (this.tmpCurrTripId != -1 ? true: false)
    }

    getSVROpenedTripId(){
        if (!navigator.onLine) {
            this.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } else{
            this.submitting = true;
            let url = this.storage.svr_url+"RepCtrl/getCurrentTripId/"+this.repId;

            this.http.get(url).subscribe((data: any) => {
            if (data.length === 1){
                this.tmpCurrTripId = data[0].trip_id;
            } else{
                this.tmpCurrTripId = -1;
                this.showToast("You have no or more than one started trips..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration.."); 
            }
            this.submitting = false;
            },
            (error: any) => {
                console.log(error);
            });
        }
    }

    getCurrRoutCustomerInfo(){
        if (!navigator.onLine) {
            this.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } else {
            this.submitting = true;
            const ParseHeaders = {
                headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
                })
            };
            
            let url = this.authService.svr_url+"RepCtrl/getCustomerByRouteID/"+this.currRootId;

            this.http.post(url, null, ParseHeaders).subscribe((data: any) => {
                this.submitting = false;
                console.log(data);
                this.isRootSelected = true;
                if (data != 0){
                    this.currRootCusts = data;
                    this.isRootCustAvail = true;
                } else {
                    this.isRootCustAvail = false;
                    this.currRootCusts = null;
                }
                // this.currRootCusts = data;
                // this.loadCurrRootCusts();
            },
            (error: any) => {
                console.log(error);
            });

        }   
    }

    // loadCurrRootCusts() {
    //     if (this.currRootCusts.length > 0) {
    //         this.isRootCustAvail = true;
    //     }
    // }

    async showToast(msg) {
        const toast = await this.toast.create({
            mode: 'ios',
            message: msg,
            duration: 4000
        });
        toast.present();
    }
}