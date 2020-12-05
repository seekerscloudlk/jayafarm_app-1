import { Component, OnInit } from '@angular/core';

import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-cust-info',
    templateUrl: './cust-info.page.html',
    styleUrls: ['./cust-info.page.scss'],
})
export class CustInfoPage implements OnInit {
    private customer: any;
    constructor( 
        public modalController: ModalController,
        private navParams: NavParams
    ) {
        this.customer = navParams.get('custData')
        // this.customer = {
        //     "cust_id": "1",
        //     "cust_name": "Club PBay",
        //     "address_line1": "Arachchikattuwa",
        //     "address_line2": "qq",
        //     "address_line3": "qqqqqqq",
        //     "cust_email": "cpb@mail.com",
        //     "cust_tp": null,
        //     "route_id": "2",
        //     "cat_id": "1",
        //     "cat_name": "Agent"
        //   }
    }

    ngOnInit() {
    }

    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }


}
