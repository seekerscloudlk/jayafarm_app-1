import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
// import { ApiCallerService } from './services/api-caller.service';
import { StorageService, Rep } from './services/storage.service';
import { Component } from '@angular/core';
 
import { Platform, Events, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController } from '@ionic/angular';
import { TripsPage } from './members/inc/trips/trips.page';
import { PrintPage } from './members/inc/print/print.page';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private navigate: any;
  private isOnKeyboard = false;
  private rep = <Rep>{ // provide dummy data unlil login
    repFname: "",
    repLname: "",
  }
  public onlineOffline: boolean = navigator.onLine;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router,
    public event: Events,
    private modalController: ModalController,
    private keyboard: Keyboard,
    private alertController: AlertController
  ) {
      
    window.addEventListener('offline', () => {
        this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
    });
    this.initializeApp();
    this.sideMenu();

    this.event.subscribe('repData',(data)=>{
      this.rep = data;
    });

    
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();

        this.authService.authenticationState.subscribe(state => {
            if (state) {
                  this.router.navigate(['members', 'dashboard']);
                // this.router.navigate(['members', 'add-order']);
                // this.router.navigate(['members', 'order-history']);
            } else {
                this.router.navigate(['login']);
            }
        });
        
        
        this.keyboard.onKeyboardShow().subscribe(() => {
            this.isOnKeyboard = true;
        });
        this.keyboard.onKeyboardHide().subscribe(() => {
            this.isOnKeyboard = false;
        });
    });
  }

    sideMenu(){
        this.navigate =
        [
        {
            title : "Trips",
            click : "openTrip()",
            icon  : "filing"
        },
        {
            title : "Logout",
            click : "logout()",
            icon  : "log-out"
        },
        {
            title : "Print",
            click : "logout()",
            icon  : "log-out"
        }
        ]
    }

    async logout(){
        const alert = await this.alertController.create({
            mode: "ios",
            header: 'Confirm Logout',
            message: 'Do you really want to logout?',
            buttons: [
                {   text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary'
                },
                {   text: 'Logout',
                    handler: () => {
                        this.authService.logout();    
                    }
                }
            ]
        });
        await alert.present();
        
    }

    async openTrip() {
        const modal = await this.modalController.create({
            component: TripsPage,
            // componentProps: {
            //     custData: cust
            // }
        });
        return await modal.present();
    }

    async openPrint() {
        const modal = await this.modalController.create({
            component: PrintPage,
            // componentProps: {
            //     custData: cust
            // }
        });
        return await modal.present();
    }

    isLogedIn(){
        return (this.rep.repFname != "" ? true : false);
    }
}