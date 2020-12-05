import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderItem, Order, Rep } from '../../../services/storage.service';
import { NavParams } from '@ionic/angular';
import { ModalController, IonSelect, Platform, AlertController  } from '@ionic/angular';
import { StorageService, Trip, TripItem } from '../../../services/storage.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { OrderInfoPage } from '../order-info/order-info.page';


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

    private orders: any[] = [];
    private outst: any;
    private custId: number;
    private submitting: boolean;
    private isOrderAvail: boolean;

    constructor(
        public modalController: ModalController,
        private authService: AuthenticationService,
        private http: HttpClient,
        private storage: StorageService,
        private plt: Platform,
        public alertController: AlertController,
        public datepipe: DatePipe,
        private navParams: NavParams
    ) { }

    ngOnInit() {
        this.plt.ready().then(() => {
            document.addEventListener("backbutton",function(e) {}, false);
        })
        this.custId = this.navParams.get('custId');
        this.getCustOdrInfo();
    }

    getCustOdrInfo(){
        if (!navigator.onLine){
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } 

        this.submitting = true;
        let url = this.storage.svr_url+"OrderCtrl/getOdrHistoryByCust/"+this.custId;

        this.http.get(url).subscribe((history: any)=>{
            this.submitting = false;
            console.log(history);
            if (history) {
                this.orders = history.orders;
                this.orders.map(order=>{
                    order.isOutst = Number(order.odr_amount) > Number(order.odr_paid_amount)? true: false;
                    order.isEx = Number(order.odr_amount) < Number(order.odr_paid_amount)? true: false;
                })
                this.isOrderAvail = this.orders.length > 0 ? true: false;
                this.outst = history.cust_outst;
            }
            console.log(history);
        });
    }

    /**
     * Close the current modal page
     */
    async dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }


    async openOrder(order: any) {
        const modal = await this.modalController.create({
            component: OrderInfoPage,
            componentProps: {
                order: order
            }
        });
        return await modal.present();
    }

    
}
