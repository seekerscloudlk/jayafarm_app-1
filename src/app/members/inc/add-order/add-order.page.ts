import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderItem, Order, Rep } from '../../../services/storage.service';
import { NavParams } from '@ionic/angular';
import { ModalController, IonSelect, Platform, AlertController  } from '@ionic/angular';
import { StorageService, Trip, TripItem, OutstPayment } from '../../../services/storage.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { ReturnPage } from '../return/return.page';
import { OrderHistoryPage } from '../order-history/order-history.page';
import { OutstSettlePage } from '../outst-settle/outst-settle.page';

declare var window: any;

@Component({
    selector: 'app-add-order',
    templateUrl: './add-order.page.html',
    styleUrls: ['./add-order.page.scss'],
})


export class AddOrderPage implements OnInit {

    private currOrder: Order = <Order>{};
    private customer: any;
    private currTripId: number;
    private curTrip: Trip = <Trip>{};
    private submitting: boolean;
    private selectList: TripItem[] = [];
    private isOrdeValid: boolean = true;
    private tempOutstanding: number = 0;
    private rep: Rep;
    private invoiceNo: any;
    private outsts: any[] = [];
    private outstSettles: OutstPayment[] = [];
    private effectivePaid: number = 0;
    private outstDeduct: number = 0;
    
    @ViewChild('selectItem', {static: false}) selectItem: IonSelect;
    
    
    constructor(
        public modalController: ModalController,
        private authService: AuthenticationService,
        private http: HttpClient,
        private storage: StorageService,
        private plt: Platform,
        public alertController: AlertController,
        public datepipe: DatePipe,
        private navParams: NavParams
    ) { 
        this.customer = this.navParams.get('customer');
        ////// this.currTripId = this.navParams.get('tripId');
        // this.repId = this.navParams.get('repId');
        this.rep = this.navParams.get('rep');
        
        // this.rep = {
        //     "repID": 2,
        //     "repEmail": "anton@mail.com",
        //     "repFname": "Anton",
        //     "repLname": "Ranaweera",
        //     "repTp": "0777895689",
        //     "repRoutes": [
        //       {
        //         "route_id": "1",
        //         "route_name": "Negombo",
        //         "desc": null
        //       },
        //       {
        //         "route_id": "2",
        //         "route_name": "Arachchikattuwa",
        //         "desc": null
        //       },
        //       {
        //         "route_id": "5",
        //         "route_name": "Colombo",
        //         "desc": null
        //       }
        //     ],
        //     "currOpenedTripId": -1
        // }
        // this.customer = {
        //     "cust_id": "4",
        //     "cust_name": "Cust y",
        //     "address_line1": "Cust y - Adrs 1",
        //     "address_line2": "Cust y - Adrs 2",
        //     "address_line3": "Cust y - Adrs 3",
        //     "cust_email": "Cust y - email",
        //     "cust_tp": "Cust y - tp",
        //     "route_id": "2",
        //     "cat_id": "2",
        //     "cat_name": "Non-Agent"
        // };
        // this.currTripId = 6;



        this.currOrder.order_items = [];
        this.currOrder.odr_is_doubt = false;
    }

    ngOnInit() {
        this.plt.ready().then(()=>{
            document.addEventListener("backbutton",function(e) {}, false);
            this.authService.getRep().then(rep=>{
                this.rep = rep;
            })
            this.fetchServerCurrTrip(); //loading current trip details
            this.addItem();
            this.getCustOutstanding();
            
        })

        console.log(this.rep)
    }


    async addReturn(){
        const modal = await this.modalController.create({
            component: ReturnPage,
            componentProps: {
                customer: this.customer,
                tripId: this.curTrip.tripId,
                rep: this.rep
            }
        });
        return await modal.present();
    }


    async outstSettle(){
        const modal = await this.modalController.create({
            component: OutstSettlePage,
            componentProps: {
                outsts: this.outsts,
                totalPaid: this.currOrder.odr_paid_amount,
                ttlOutst: this.customer.outstanding
            }
        });
        modal.present(); 
        let ret = await modal.onWillDismiss();
        let settles = ret.data.settlements;
        if (settles) {
            console.log(settles);
            this.outstSettles = settles;
            this.calcOutstDeduct();
            // this.calcEffectivePaid();
            this.updateTotOutst();
        }
    }

    calcOutstDeduct(){
        this.outstDeduct = 0;
        this.outstSettles.forEach(settle=>{
            this.outstDeduct = this.outstDeduct*1 + settle.amount*1;
        })
    }

    removeSettlePay(idx: number, amount: number){
        this.outstSettles.splice(idx, 1);
        this.calcOutstDeduct();
        // this.calcEffectivePaid();
        this.updateTotOutst();
    }
    

    calcEffectivePaid(){
        this.effectivePaid = this.currOrder.odr_paid_amount*1 - this.outstDeduct*1;
    }

    setEffectiveBalance(evt){
        this.effectivePaid = evt.target.value*1 - this.outstDeduct*1;
    }

    async openHistory(){
        const modal = await this.modalController.create({
            component: OrderHistoryPage,
            componentProps: {
                custId: this.customer.cust_id,
            }
        });
        return await modal.present();
    }

    printInvoice(isCustCpy: boolean){
        let str: string = "";
        let strSep="++++++++++++++++++++++++++++++++\n";

        str+="___Sales Invoice: #"+this.invoiceNo+"___\n";
        str+=this.customer.cust_name+"\n";
        str+=this.customer.address_line1+"\n";
        str+=this.customer.address_line2+"\n";
        str+=this.customer.address_line3+"\n";
        str+="--------------------------------\n";
        str+="Date: "+this.currOrder.odr_datetime+"\n";
        str+="Rep : "+this.rep.repFname+" "+this.rep.repLname+"\n\n";
        str+="                     \n";
        str+="========== Sales Items =========\n";
        str+="Item |       Qty         Amount \n";
        str+="Unit Price\n";
        str+="________________________________\n";
        
        this.currOrder.order_items.forEach(item=>{
            str+=item.item_name+"\n";
            str+="Rs."+item.price_sold+" X "+item.qty+" => Rs."+(item.qty*item.price_sold).toFixed(2)+"\n";
        })
        str+="\n======= Invoice Payment ========\n";
        str+="Bill Amount     Rs."+(this.currOrder.odr_amount-this.currOrder.vat_amount).toFixed(2)+"\n";
        str+="VAT(8%)         Rs."+this.currOrder.vat_amount.toFixed(2)+"\n";
        str+="Tot.Bill Amount Rs."+this.currOrder.odr_amount.toFixed(2)+"\n";
        str+="--------------------------------\n";
        str+="Paid Amount     Rs."+this.currOrder.odr_paid_amount.toFixed(2)+"\n";
        str+="Current Outst.  Rs."+this.tempOutstanding.toFixed(2)+"\n";
        
        if (this.outstSettles.length > 0) {
            str+="\n\n===== Out/Exc Settlements ======\n";
            this.outstSettles.forEach(pay=>{
                str+="Invoice #"+pay.odrId+" => Rs."+pay.amount+(pay.isOutstPay?"(+)":"(-)")+"\n";       
            })
            str+="--------------------------------\n";
            str+="Tot.Out/Exc Ded Rs."+this.outstDeduct.toFixed(2)+"\n";
        }
        str+="================================\n\n\n";
        str+="________________________________\n";
        if (isCustCpy) {
            str+="Customer Signature\n"; 
        }else{
            str+="Sales Rep Signature\n"; 
        }
        str+=strSep+"\n\n";

        window.sunmiInnerPrinter.printOriginalText(strSep);
        window.sunmiInnerPrinter.printTextWithFont('\n      Jaya Farm\n','Calibri',36);
        window.sunmiInnerPrinter.printTextWithFont('\n   Nattandiya, Marawila\n','Calibri',30);
        window.sunmiInnerPrinter.printTextWithFont('\n         032-2254811\n','Calibri',24);
        // window.sunmiInnerPrinter.printTextWithFont('\n\nSales Invoice: #'+this.invoiceNo+"\n",'Calibri',30);
        window.sunmiInnerPrinter.printOriginalText(str);
        if (!isCustCpy) {
            this.modalController.dismiss({
                'dismissed': true
            });
        }
    }


    async submitOrder(){
        if (!navigator.onLine) {
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
            return;
        } 
        this.processOrder();
        console.log(this.currOrder.odr_paid_amount);
        if ((!this.currOrder.odr_paid_amount || this.currOrder.odr_paid_amount == null) && this.currOrder.odr_paid_amount !== 0) {
            this.authService.showToast("<b>Please enter the 'Total Payed Amount'... <ion-icon name='warning'></ion-icon></b>");
            return;
        } 
        const ParseHeaders = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        
        let url = this.storage.svr_url+"OrderCtrl/processOrder";
        let postData: any = [];
    
        postData.push({ 
            'order': this.currOrder,
            'currOdrPay': this.effectivePaid,
            'outstPays': this.outstSettles
        });
        this.submitting = true;
      
        //   console.log(postData);
      
        const alert = await this.alertController.create({
            mode: "ios",
            header: 'Confirm submit invoice',
            message: 'Do you really want to submit the invoice?',
            buttons: [
                {   text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => { this.submitting = false; }
                },
                {   text: 'Submit',
                    handler: () => {
                        console.log(postData)
                        this.http.post(url, postData, ParseHeaders).subscribe((res) => {
                            this.submitting = false;
                            console.log(res)
                            if (res !== false ) {
                                console.log(res);
                                this.invoiceNo = res;
                                console.log(this.invoiceNo);
                                this.printInvoice(true);
                                this.currOrder.isWorking = false;
                            } else {
                                this.authService.showToast('Problem submitting invoice..');
                                return false;
                            }
                        }, (error: any) => {
                            console.log(error);
                            return false;
                        });
                    }
                }
            ]
        });
        this.submitting = false;
        await alert.present();
    }
    
    /**
     * Check while typing that enough quantity is available in trip item
     * @param ev - $event variable of current event
     * @param itemId - The trip item that the balance quantity should be checked
     */
    chkItemBalence(ev, itemId: number) {
        if (itemId === undefined) {
            this.authService.showToast("<b>Please select the item first..<ion-icon name='warning'></ion-icon></b>");
            // ev.srcElement.disabled = true;
            ev.target.value = null;
        } else{
            // ev.srcElement.disabled = false;
            let tripItemIdx = this.curTrip.tripItems.findIndex(item=> item.itemId == itemId);
            if (this.curTrip.tripItems[tripItemIdx].balanceQty < ev.target.value) {
                this.authService.showToast("<b>You don't have enough item quantity..<ion-icon name='warning'></ion-icon></b>");
                ev.target.value = null;
            }
        }
       
    }

    finalizeItem(evt){
        this.calcOrderAmount();
        this.setOrderUtilInfo();
        console.log(evt)
    }

    processOrder(){
        console.log(this.currOrder.order_items)
        if (this.currOrder.order_items.length < 1) {
            this.calcOrderAmount();
            this.setOrderUtilInfo();
            // this.isOrdeValid = false;
            // this.authService.showToast("<b>You are going to  <ion-icon name='warning'></ion-icon></b></br>Please add atleast one item to the invoice..");
        } else{
            this.currOrder.order_items.forEach(item=>{
                if (!item.item_id || !item.qty || item.qty == null ) {
                    // this.isOrdeValid = false;
                    this.authService.showToast("<b>Problem processing invoice. <ion-icon name='warning'></ion-icon></b></br>Please re-check invoice items carefully...");
                }
                else{   
                    this.calcOrderAmount();
                    this.setOrderUtilInfo();
                    // this.setInvoicePaidAuto();
                }
            })
        }
    }

    calcOrderAmount(){
        if ((!this.currOrder.odr_paid_amount || this.currOrder.odr_paid_amount == null) && this.currOrder.odr_paid_amount !== 0) {
            this.authService.showToast("<b>Please enter the 'Total Payed Amount'... <ion-icon name='warning'></ion-icon></b>");
            return;
        }
        this.currOrder.odr_amount = 0;
        // this.tempOutstanding = this.customer.outstanding;
        
        console.log(this.currOrder)

        this.currOrder.order_items.forEach(item=>{
            this.currOrder.odr_amount += item.price_sold*item.qty;
        })

        this.currOrder.vat_amount = this.customer.is_vat == "VAT" ? 8/100 * this.currOrder.odr_amount:0;
        this.currOrder.odr_amount = this.currOrder.odr_amount + this.currOrder.vat_amount;
        this.updateTotOutst();
    }

    updateTotOutst(){
        this.calcEffectivePaid();

        // this.tempOutstanding = this.customer.outstanding*1 - this.outstDeduct*1;
        this.tempOutstanding = 0;
        this.tempOutstanding = (((this.tempOutstanding*-1) + (this.effectivePaid*1 - this.currOrder.odr_amount))*-1);
    }

    setOrderUtilInfo(){
        this.currOrder.cust_id = this.customer.cust_id;
        this.currOrder.odr_datetime = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        this.currOrder.trip_id = this.curTrip.tripId;
        this.currOrder.cust_cat_id = Number(this.customer.cat_id);
        // this.currOrder.odr_paid_amount 
        console.log(this.currOrder)
    }


    isOrderValid(){
        // this.isOrdeValid = true;

        // if (this.currOrder.order_items.length > 0) {
        //     this.isOrdeValid = false;
        //     return;
        // }
        // this.currOrder.order_items.forEach(item=>{
        //     if (!item.item_id || !item.qty || item.qty == null) {
        //         this.isOrdeValid = false;
        //         return;
        //     }
        // })
        // console.log(this.currOrder.order_items)
        // this.isOrdeValid = isValid;
    }

    /**
     * Update the selected status of a specific item in current trip
     * @param itemId - item to be updated on current trip
     */
    toggleUpdateItemList(itemId: number){
        console.log("itemId "+itemId)
        console.log(this.curTrip.tripItems)
        let itemIndex = this.curTrip.tripItems.findIndex(itemInArra=> itemInArra.itemId == itemId);
        if (itemIndex > -1) {
            console.log("itemIndex "+itemIndex)
            let isSelectd = this.curTrip.tripItems[itemIndex].isSelected;
            this.curTrip.tripItems[itemIndex].isSelected = isSelectd? false: true;
        }  
        this.isOrderValid(); 
    }

    /**
     * Update the order item sold price of the particular customer
     * @param itemId - The item to be updated the price on order items
     */
    calcPrice(itemId: number){
        let index = this.currOrder.order_items.findIndex(odrItem=>odrItem.item_id == itemId);
        console.log("index: "+index)
        if (index > -1) {
            let selectedItem = this.currOrder.order_items[index];
            let tripItemIdx = this.curTrip.tripItems.findIndex(item=>item.itemId == selectedItem.item_id);
            this.currOrder.order_items[index].price_sold = this.curTrip.tripItems[tripItemIdx].item_unit_price;     
            this.currOrder.order_items[index].item_name = this.curTrip.tripItems[tripItemIdx].itemName;       
        }
        this.isOrderValid();
    }

    /**
     * Remove item from order items list
     * @param item - Item object that in current order to be removed 
     */
    removeItem(item){
        let index = this.currOrder.order_items.indexOf(item);
    
        if(index > -1){
            let rmvItemId = this.currOrder.order_items[index].item_id;
            this.toggleUpdateItemList(rmvItemId);
            this.currOrder.order_items.splice(index, 1);
        }
        this.isOrderValid();
        console.log( this.currOrder.order_items)
    }

    /**
     * Add empty item to current order items list 
     */
    addItem(){
        console.log(this.curTrip.tripItems)
        this.currOrder.isWorking = true;
        this.currOrder.order_items.push(<OrderItem>{});
        this.currOrder.odr_paid_amount = 0.00;
        console.log(this.currOrder.order_items)
        // this.isOrderValid();
    }

    /**
     * Close the current modal page
     */
    async dismiss() {
        if (this.currOrder.order_items.length > 0 && this.currOrder.isWorking) {
            const alert = await this.alertController.create({
                mode: "ios",
                header: 'Exit order process',
                message: 'Do you really want to exit and discard the order?',
                buttons: [
                    {   text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                    },
                    {   text: 'Discard & Exit',
                        handler: () => {
                            this.modalController.dismiss({
                                'dismissed': true
                            });
                        }
                    }
                ]
                });
                await alert.present();
        }
    }

    /**
     * Retreive current customer outstanding payment value
     */
    getCustOutstanding(){
        if (!navigator.onLine){
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } 

        let url = this.storage.svr_url+"OrderCtrl/getCustOutstanding/"+this.customer.cust_id;

        this.http.get(url).subscribe((outsts: any)=>{
            console.log(outsts);

            if (outsts) {
                this.outsts = outsts;
                let ttlOutst: number = 0;

                outsts.forEach(outst=>{
                    // console.log(outst.out)
                    ttlOutst += Number(outst.out);
                    // console.log(ttlOutst)
                })
                console.log(ttlOutst)
                this.customer.outstanding = ttlOutst;
                // this.tempOutstanding = this.customer.outstanding;
                this.tempOutstanding = this.customer.outstanding*1 - this.outstDeduct*1;
            }
        });
    }


    /**
     * Load current trip info from server side
     */
    fetchServerCurrTrip(){
            
        if (!navigator.onLine){
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } 

        let url = this.storage.svr_url+"RepCtrl/getRepTripList/"+this.rep.repID+"/-1/1";

        // let trip: Trip = <Trip>{};
        this.http.get(url).subscribe((data: any[])=>{
            if (data.length != 1) {
                this.authService.showToast("You have no or more than one started trips..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration.."); 
            }else{
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

    /**
     * Fetch trip item info from serverside
     * @param tripId - The trip_id to get the items of that particular trip
     */
    getTripItems(tripId: number): TripItem[]{
        console.log("trip Id to get items "+tripId)
        let items: TripItem[] = [];

        if (!navigator.onLine) {
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } else {
            this.submitting = true;
            let url = this.storage.svr_url+"RepCtrl/getItemPriceByCustomer/"+tripId+"/"+this.customer.cust_id+"/"+this.customer.cat_id;

            this.http.get(url).subscribe((data: any) => {
                if (data.length > 0){
                    data.forEach((elm) => {
                        items.push(<TripItem>{
                            itemId: Number(elm.item_id),
                            itemName: elm.item_name,
                            itemUnitName: elm.item_unit_name,
                            item_unit_price: elm.item_unit_price,
                            loadQty: elm.load_qty,
                            balanceQty: (elm.unload_qty == null || elm.unload_qty == '') ? Number(elm.load_qty): Number(elm.unload_qty),
                            isSelected: false
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

}
