import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

export interface previousOrderPayment {
    odr_id: number;
    paid_amount: number;
    paid_date: number;
}


export interface ReturnItem {
    ret_id: number,
    item_id: number,
    item_name: string,
    qty: number,
    item_unit_name: string
    isSelected: boolean
}

export interface Returning{
    cust_id: number,
    date: string,
    trip_id: number,
    retItems: ReturnItem[],
    isWorking: boolean
}

export interface Order {
    odr_id: number;
    odr_datetime: string;
    odr_amount: number;
    odr_paid_amount: string;
    odr_is_doubt: boolean;
    cust_id: number;
    trip_id: number;
    order_items: OrderItem[];
    isWorking: boolean;
    odr_remark: string;
    cust_cat_id: number;
    vat_amount: number;
}

export interface OrderItem {
    item_id: number;
    item_name: string;
    qty: number;
    price_sold: number;
}

export interface Rep {
    repID: number,
    repFname: string, 
    repLname: string, 
    repEmail: string, 
    repTp: string,
    repRoutes: any,
    currOpenedTripId: number
}

export interface Trip {
    tripId: number;
    tripStTime: string;
    tripEndTime: string;
    tripItems: TripItem[];
    isOpened: boolean;
}

export interface TripItem {
    itemId: number,
    itemName: string,
    itemUnitName: string,
    item_unit_price: any,
    loadQty: any,
    balanceQty: any,
    isSelected: boolean
}

export interface OutstPayment {
    odrId: number;
    amount: number;
    isOutstPay: boolean;
}

const SVR_URL = 'https://jayafarms.com/mis-rep-app/';
// const SVR_URL = 'https://192.168.8.100/';
// const SVR_URL = 'https://192.168.110.220/';
// const SVR_URL = 'https://192.168.8.146/';
const REP_KEY = '_jf_app_rep_key_';
const CURR_TRIP_KEY = '_jf_trip_info_key_';
const TRIP_ITEMS_KEY = '_jf_trip_item_info_key_';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

    isSetLocalTrip = new BehaviorSubject(false);
    public svr_url: string = SVR_URL;
    
    constructor( 
        private storage: Storage,
        private plt: Platform
    ) { 
        this.plt.ready().then(() => {
            this.setLocalTripState();
        })
    }

    /**
     * Store current trip info on local storage 
     * @param trip - Trip object of current trip
     */
    setLocalTrip(trip: Trip){
        this.storage.set(CURR_TRIP_KEY, trip);
    }

    /**
     * Get the current trip info object from localstorage
     */
    getLocalTrip(): Promise<Trip>{
        return this.storage.get(CURR_TRIP_KEY);
    }
    
    setLocalTripState() {
        this.storage.get(CURR_TRIP_KEY).then(localTrip =>{
            this.isSetLocalTrip.next( (localTrip) ? true:false ); 
        })
    }

    removeLocalTripStorage(){
        this.storage.remove(CURR_TRIP_KEY);
    }

    getLocalTripState(){
        return this.isSetLocalTrip.value;
    }

    getRep(): Promise<Rep>{
        return this.storage.get(REP_KEY);
    }

    // setLocalTripItems(tripItem: TripItem[]){
    //   this.storage.set(TRIP_ITEMS_KEY, tripItem);
    // }

    // getLocalTripItems(): Promise<TripItem[]>{
    //   return this.storage.get(TRIP_ITEMS_KEY)
    // }
}
