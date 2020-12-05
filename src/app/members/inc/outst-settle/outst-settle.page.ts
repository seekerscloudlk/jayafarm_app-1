import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { OutstMorePage } from '../outst-more/outst-more.page';
import { OutstPayment } from '../../../services/storage.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
    selector: 'app-outst-settle',
    templateUrl: './outst-settle.page.html',
    styleUrls: ['./outst-settle.page.scss'],
})

export class OutstSettlePage implements OnInit {
    private outsts: any;
    private totalPaid: number;
    private isOutstAvail: boolean = false;
    private ttlOutst: number = 0;
    private oustPays: OutstPayment[] = [];
    private effectivePaid: number = 0;
    constructor(
        public modalController: ModalController,
        private navParams: NavParams,
        private authService: AuthenticationService
    ) { 
        this.outsts = navParams.get('outsts');
        this.totalPaid = Number(navParams.get('totalPaid'));
        this.ttlOutst = navParams.get('ttlOutst');
        console.log(this.outsts)
    }

    ngOnInit() {
        this.isOutstAvail = this.outsts.length > 0 ? true: false;
        this.effectivePaid = this.totalPaid;
        this.getTotalOutst();
    }

    removeItem(idx: number, amount: number){
        this.oustPays.splice(idx, 1);
        this.calcEffectivePaid(amount, true);
    }

    confirmSettles(){
        if (this.oustPays.length < 1) {
            this.authService.showToast("<b>Please add atleast one settlemnt record and proceed.. <ion-icon name='information-circle-outline'></ion-icon></b>");
        }else{
            this.modalController.dismiss({
                settlements: this.oustPays
            });
        }
    }


    getTotalOutst() {
        let ttlOutst: number = 0;
        this.outsts.forEach((outst: any, index) => {
            console.log(index)
            this.outsts[index].isOutst = Number(this.outsts[index].isOutst) == 1 ? true: false;  
            ttlOutst += Number(outst.out);
        });
    }


    async openOutstMore(out: any){
        const modal = await this.modalController.create({
            component: OutstMorePage,
            componentProps: {
                outst: out,
                currPay: this.totalPaid,
                effectivePaid: this.effectivePaid
            }
        });
        modal.present();
        let ret = await modal.onWillDismiss();
        let pay: OutstPayment = <OutstPayment>ret.data.payment;
        if (pay) {
            if(this.oustPays.some(function(el){ return el.odrId === pay.odrId})){
                this.authService.showToast("<b>The record already exists in the settlments list.. <ion-icon name='information-circle-outline'></ion-icon>");
            }else{
                console.log(pay);
                this.oustPays.push(pay);
                this.calcEffectivePaid(pay.amount, false);
            }
        } 
    }

    calcEffectivePaid(pay: number, isAdd: boolean){

        if(isAdd) {
            this.effectivePaid = this.effectivePaid*1 + pay*1;
        }else {
            this.effectivePaid = this.effectivePaid*1 - pay*1;
        }
    }
    
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true,
        });
    }

}
