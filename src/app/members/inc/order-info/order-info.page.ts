import { Component, OnInit } from '@angular/core';

import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
    selector: 'app-order-info',
    templateUrl: './order-info.page.html',
    styleUrls: ['./order-info.page.scss'],
})
export class OrderInfoPage implements OnInit {
    private order: any;

    constructor(
        public modalController: ModalController,
        private navParams: NavParams
    ) { 
        this.order = navParams.get('order');
    }

    ngOnInit() {}

    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }

}
