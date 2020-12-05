import { Component, OnInit } from '@angular/core';

import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';
import { StorageService, Trip, TripItem } from '../../../services/storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trips-more',
  templateUrl: './trips-more.page.html',
  styleUrls: ['./trips-more.page.scss'],
})
export class TripsMorePage implements OnInit {
    

    private trip: Trip = <Trip>{};
    private submitting:boolean;

    constructor(
        private modalController: ModalController, 
        private authService: AuthenticationService,
        private storage: StorageService,
        private navParams: NavParams,
        private http: HttpClient,
    ) { 
        this.trip = navParams.get('trip');
        console.log(this.trip)
        this.trip.tripItems = this.getTripItems(this.trip.tripId)
    }

    ngOnInit() {
    }


    getTripItems(tripId: number): TripItem[]{
        console.log("trip Id to get items "+tripId)
        let items: TripItem[] = [];

        if (!navigator.onLine) {
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } else {
            this.submitting = true;
            let url = this.storage.svr_url+"RepCtrl/getTripItemsByTripID/"+tripId;

            this.http.get(url).subscribe((data: any) => {
            if (data.length > 0){
                data.forEach((elm) => {
                    items.push(<TripItem>{
                        itemId: elm.item_id,
                        itemName: elm.item_name,
                        itemUnitName: elm.item_unit_name,
                        item_unit_price: elm.item_unit_price,
                        loadQty: elm.load_qty,
                        balanceQty: (elm.unload_qty == null || elm.unload_qty == '') ? elm.load_qty: elm.unload_qty
                    })
                });
            } 
            this.submitting = false;
            },
            (error: any) => {
                console.log(error);
            });
        } 
        return items; 
    }

    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
}

