import { Injectable } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonList, Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../../../services/authentication.service';
import { StorageService, Trip, TripItem } from '../../../services/storage.service';
import { ApiCallerService } from '../../../services/api-caller.service';
import { TripsMorePage } from '../trips-more/trips-more.page'
@Component({
    selector: 'app-trips',
    templateUrl: './trips.page.html',
    styleUrls: ['./trips.page.scss'],
})
@Injectable({
    providedIn: 'root'
})
export class TripsPage implements OnInit {

    private repId: number;
    private submitting: boolean;
    private closedTrips: Trip[] = [];
    private newOpenedTrips: Trip[] = [];
    private curTrip: Trip = <Trip>{};
    customPopoverOptions: any = {
        subHeader: 'Select Records Count'
    };
    private closedTripListRows: any = 10;
  
    constructor( 
        public modalController: ModalController,
        private authService: AuthenticationService,
        private http: HttpClient,
        private storage: StorageService,
        private plt: Platform,
    ) {
    
    }

    ngOnInit() {
        this.plt.ready().then(() => {
            this.storage.getRep().then( rep => {
                this.repId = rep.repID;   
                this.fetchServerCurrTrip();
                this.fetchSVRClosedTrips();
                console.log(this.curTrip);
            })
        })
    }

    /**
     * Open trip more details on the modal
     * @param trip - The selected closed trip object
     */
    async openTripMore(trip: Trip) {
        const modal = await this.modalController.create({
            component: TripsMorePage,
            componentProps: {
                trip: trip
            }
        });
        return await modal.present();
    }

    removeLocalTripStorage(){
        this.storage.removeLocalTripStorage();
    }

    fetchServerCurrTrip(){
            
        if (!navigator.onLine){
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } 

        let url = this.storage.svr_url+"RepCtrl/getRepTripList/"+this.repId+"/-1/1";

        // let trip: Trip = <Trip>{};
        this.http.get(url).subscribe((data: any[])=>{
            if (data.length != 1) {
                this.authService.showToast("You have no or more than one started trips..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration.."); 
            }else{
            // data.forEach(elm=>{
                let elm = data[0];
                this.curTrip = <Trip>{
                    tripId: Number(elm.trip_id),
                    tripStTime: elm.trip_st_time,
                    tripEndTime: elm.trip_end_time,
                    tripItems: this.getTripItems(Number(elm.trip_id)),
                    isOpened: (elm.trip_end_time == null) ? true: false
                }
                
            }
        });
    }

    fetchSVRClosedTrips(){
            
        if (!navigator.onLine){
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } 
        
        if (this.closedTripListRows == "List All") this.closedTripListRows = -1;
        let url = this.storage.svr_url+"RepCtrl/getRepTripList/"+this.repId+"/"+this.closedTripListRows+"/0";

        this.submitting = true;
        this.http.get(url).subscribe((data: any[])=>{
            if (data.length < 1) {
                this.authService.showToast("..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration.."); 
            }else{
                this.closedTrips = this.createTripObjByArray(data, false);
            }
        });
        this.submitting = false;
    }

    createTripObjByArray(data: any[], isWithItems: boolean): Trip[]{
        let tripInfo: Trip[] = [];
        
        data.forEach(elm=>{
            tripInfo.push(<Trip>{
                tripId: Number(elm.trip_id),
                tripStTime: elm.trip_st_time,
                tripEndTime: elm.trip_end_time,
                tripItems: (isWithItems) ? this.getTripItems(Number(elm.trip_id)): <TripItem[]>{},
                isOpened: (elm.trip_end_time == null) ? true: false
            });
        })
        return tripInfo;
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
                // data.forEach((elm: { item_id: number; item_name: any; item_unit_name: any; item_unit_price: number; load_qty: number; }) => {
                data.forEach((elm) => {
                    items.push(<TripItem>{
                        itemId: elm.item_id,
                        itemName: elm.item_name,
                        itemUnitName: elm.item_unit_name,
                        item_unit_price: elm.item_unit_price,
                        loadQty: elm.load_qty,
                        balanceQty: (elm.unload_qty == null || elm.unload_qty == '') ? elm.load_qty: elm.unload_qty,
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


    getSVROpenedTripId(){
        if (!navigator.onLine) {
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } else{
            this.submitting = true;
            let url = this.storage.svr_url+"RepCtrl/getCurrentTripId/"+this.repId;

            this.http.get(url).subscribe((data: any) => {
            if (data.length === 1){
                return data[0].trip_id;
            } else{
                this.authService.showToast("You have no or more than one started trips..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration.."); 
            }
            this.submitting = false;
            },
            (error: any) => {
                console.log(error);
            });
        }
    }

    isTripsAvailable() {
        return (this.closedTrips.length > 0 || this.curTrip.tripId) ? true: false;
    }

    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }

}