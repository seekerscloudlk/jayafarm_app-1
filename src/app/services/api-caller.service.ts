import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService} from './authentication.service'
import { StorageService, Trip, TripItem, Rep } from './storage.service'
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})

export class ApiCallerService {
    private submitting: boolean;
    private repId: number;
    public currTrip: Trip;
    public tmpCurrTripId: number;

    constructor(
        private http: HttpClient,
        private storage: StorageService,
        private plt: Platform,
        private toastController: ToastController
    ) {
        // this.plt.ready().then(() => {
        //     this.storage.getRep().then( rep => {
        //         this.repId = rep.repID;   
        //     })
        // })
    }

    // getSVROpenedTripId(): number{
    //     let tripId: number;
    //     if (!navigator.onLine) {
    //         this.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
    //     } else{
    //         this.submitting = true;
    //         let url = this.storage.svr_url+"repctrl/getCurrentTripId/"+this.repId;

    //         this.http.get(url).subscribe((data: any) => {
    //         if (data.length === 1){
    //             tripId = data[0].trip_id;
    //         } else{
    //             this.showToast("You have no or more than one started trips..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration.."); 
    //         }
    //         this.submitting = false;
    //         },
    //         (error: any) => {
    //             console.log(error);
    //         });
    //     }
    //     this.tmpCurrTripId = tripId;
    //     return tripId;
    // }

    // fetchServerCurrTrip(): Trip{
        
    //     if (!navigator.onLine){
    //         this.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
    //     } 

    //     let url = this.storage.svr_url+"repctrl/getRepTripList/"+this.repId+"/-1/1";

    //     let trip: Trip = <Trip>{};
    //     this.http.get(url).subscribe((data: any[])=>{
    //         if (data.length != 1) {
    //             console.log('a')
    //             this.showToast("You have no or more than one started trips..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration.."); 
    //         }else{
    //         // data.forEach(elm=>{
    //             console.log('b')
    //             let elm = data[0];
    //             trip = <Trip>{
    //                 tripId: Number(elm.trip_id),
    //                 tripStTime: elm.trip_st_time,
    //                 tripEndTime: elm.trip_end_time,
    //                 tripItems: this.getTripItems(Number(elm.trip_id)),
    //                 isOpened: (elm.trip_end_time == null) ? true: false
    //             }
                
    //         }
    //     });
    //     return trip;
    // }

    // createTripObjByArray(data: any[], isWithItems: boolean): Trip[]{
    //     let tripInfo: Trip[] = [];
        
    //     data.forEach(elm=>{
    //         tripInfo.push(<Trip>{
    //             tripId: Number(elm.trip_id),
    //             tripStTime: elm.trip_st_time,
    //             tripEndTime: elm.trip_end_time,
    //             tripItems: (isWithItems) ? this.getTripItems(Number(elm.trip_id)): <TripItem[]>{},
    //             isOpened: (elm.trip_end_time == null) ? true: false
    //         });
    //     })
    //     return tripInfo;
    // }

    // getTripItems(tripId: number): TripItem[]{
    //     console.log("trip Id to get items "+tripId)
    //     let items: TripItem[] = [];

    //     if (!navigator.onLine) {
    //         this.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
    //     } else {
    //         this.submitting = true;
    //         let url = this.storage.svr_url+"repctrl/getTripItemsByTripID/"+tripId;

    //         this.http.get(url).subscribe((data: any) => {
    //         if (data.length > 0){
    //             // data.forEach((elm: { item_id: number; item_name: any; item_unit_name: any; item_unit_price: number; load_qty: number; }) => {
    //             data.forEach((elm) => {
    //                 items.push(<TripItem>{
    //                     itemId: elm.item_id,
    //                     itemName: elm.item_name,
    //                     itemUnitName: elm.item_unit_name,
    //                     item_unit_price: elm.item_unit_price,
    //                     loadQty: elm.load_qty,
    //                     balanceQty: null,
    //                 })
    //             });
    //         } 
    //         this.submitting = false;
    //         },
    //         (error: any) => {
    //             console.log(error);
    //         });
    //     } 
    //     return items; 
    // }

    // async showToast(msg: string) {
    //     const toast = await this.toastController.create({
    //         mode: "ios",
    //         message: msg,
    //         duration: 2000
    //     });
    //     toast.present();
    // }
}
