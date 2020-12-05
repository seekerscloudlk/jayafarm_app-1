import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';
import { StorageService, OutstPayment } from '../../../services/storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-outst-more',
    templateUrl: './outst-more.page.html',
    styleUrls: ['./outst-more.page.scss'],
})

export class OutstMorePage implements OnInit {

    private outst: any;
    private payments: any[] = [];
    private currPay: number = 0;
    private effectivePaid: number = 0;
    private isPayAvali: boolean = false;
    private isOutst: boolean;
    private outstPayment: OutstPayment = <OutstPayment>{};
    private submitting:boolean = false;

    constructor(
        public modalController: ModalController,
        private navParams: NavParams,
        private authService: AuthenticationService,
        private storage: StorageService,
        private http: HttpClient
    ) { 
        this.outst = this.navParams.get('outst');
        this.currPay = this.navParams.get('currPay');
        this.effectivePaid = this.navParams.get('effectivePaid');
        this.isOutst = this.outst.isOutst;
        this.outstPayment.odrId = this.outst.odr_id;
        this.outstPayment.isOutstPay = this.outst.isOutst;
    }

    ngOnInit() { 
        this.getPayedHistoryByOrder();
        this.setMaxOutstPayment();

        this.currPay = this.currPay ? this.currPay : 0;
        this.effectivePaid = this.effectivePaid ? this.effectivePaid : 0;
    }

    payForOdr(){
        if ((!this.outstPayment.amount || this.outstPayment.amount == null) || 
            (this.outstPayment.amount <= 0 && this.outstPayment.isOutstPay === true)) {
            this.authService.showToast("<b>Please enter a valid payment amount.. <ion-icon name='information-circle-outline'></ion-icon></b>");
        }else{
            this.modalController.dismiss({
                payment: this.outstPayment
            });
        }
    }

    getPayedHistoryByOrder(){
        if (!navigator.onLine)
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        
        
        let url = this.storage.svr_url+"OrderCtrl/getPayedHistoryByOrder/"+this.outst.odr_id;
        this.submitting = true;
        
        this.http.get(url).subscribe((payments: any)=>{
            
            console.log(payments);

            if (payments){
                this.payments = payments;
                this.isPayAvali = this.payments.length > 0 ? true: false;
            }
        });
        this.submitting = false;
    }


    chkPayBalence(ev){
        console.log(this.effectivePaid +"<"+ ev.target.value)
        if (this.effectivePaid*1 < ev.target.value*1) {
            this.authService.showToast("<b>The effective payment amount is insufficient.. <ion-icon name='information-circle-outline'></ion-icon></b>");
            ev.target.value = null;
            this.setMaxOutstPayment();
        }
        console.log(ev.target.value +" > "+this.outst.out)
        if (ev.target.value*1 > this.outst.out*1 ) {
            this.authService.showToast("<b>The value you entered is larger than the outstanding amount.. <ion-icon name='information-circle-outline'></ion-icon></b>");
            ev.target.value = null;
            this.setMaxOutstPayment();
        }
    }

    setMaxOutstPayment(){
        if (this.isOutst) {
            if (this.outst.out <= this.effectivePaid) {
                this.outstPayment.amount = this.outst.out;
            } else {
                this.outstPayment.amount = this.effectivePaid;
            }
        } else{
            this.outstPayment.amount = this.outst.out;
        }
    }

    dismiss() {
        this.modalController.dismiss({
            'dismissed': true,
        });
    }
}
