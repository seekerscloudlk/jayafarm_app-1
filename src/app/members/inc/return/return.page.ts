import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderItem, Order, Rep } from '../../../services/storage.service';
import { NavParams } from '@ionic/angular';
import { ModalController, IonSelect, Platform, AlertController  } from '@ionic/angular';
import { StorageService, Trip, TripItem, ReturnItem, Returning } from '../../../services/storage.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common'

declare var window: any;

@Component({
  selector: 'app-return',
  templateUrl: './return.page.html',
  styleUrls: ['./return.page.scss'],
})
export class ReturnPage implements OnInit {

    private curReturn: Returning = <Returning>{};
    private customer: any;
    private rep: Rep;
    private currTripId: number;
    private submitting: boolean;
    private items: any = [];
    docketId: Object;

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
        this.curReturn.retItems = [];
        this.customer = this.navParams.get('customer');
        this.currTripId = this.navParams.get('tripId');
        this.rep = this.navParams.get('rep');
        this.curReturn.isWorking = true;
        this.curReturn.cust_id = this.customer.cust_id;
        this.curReturn.trip_id = this.currTripId;

        console.log(this.customer)
        console.log(this.currTripId)
        console.log(this.rep)
    }

    ngOnInit() {
        this.plt.ready().then(()=>{
            this.getAllItems();
            this.addItem();
        })
    }

    async submitOrder(){
        if (!navigator.onLine) {
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
            return;
        } 

        console.log(this.curReturn);
        if (this.curReturn.retItems[0].qty || this.curReturn.retItems[0].qty > 1) {
            this.curReturn.retItems.forEach(item=>{
                if (!item.qty || item.qty == null) {
                    this.authService.showToast("<b>Problem processing.. <ion-icon name='warning'></ion-icon></b></br>Please re-check the items and quantities carefully...");
                    return;
                }
            })
            const ParseHeaders = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            };
            
            let url = this.storage.svr_url+"ReturnCtrl/returnProcess";
            let postData: any = [];
        
            postData.push({ 
                'return': this.curReturn
            });
            this.submitting = true;
          
            //   console.log(postData);
          
            const alert = await this.alertController.create({
                mode: "ios",
                header: 'Confirm submit return request',
                message: 'Do you really want to submit the return request?',
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
                                    // console.log(res);
                                    this.docketId = res;
                                    // console.log(this.invoiceNo);
                                    this.printDocket(true);
                                    this.curReturn.isWorking = false;
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
        } else{
            this.authService.showToast("<b>Problem processing.. <ion-icon name='warning'></ion-icon></b></br>Please add atleast one item to the list...");
            return;
        }
        
    }

    printDocket(isCustCpy: boolean){
        let str: string = "";
        let strSep="++++++++++++++++++++++++++++++++\n";

        str+="______Return Docket: #"+this.docketId+"_______\n";
        str+=this.customer.cust_name+"\n";
        str+=this.customer.address_line1+"\n";
        str+=this.customer.address_line2+"\n";
        str+=this.customer.address_line3+"\n";
        str+="________________________________\n";
        str+="Date: "+this.curReturn.date+"\n";
        str+="Rep : "+this.rep.repFname+" "+this.rep.repLname+"\n\n";
        str+="          Returned Items          \n";
        str+="________________________________\n";
        str+="Item            Qty\n";
        str+="________________________________\n";
        
        this.curReturn.retItems.forEach(item=>{
            str+=item.item_name+" X "+item.qty+item.item_unit_name+"\n";
        })
        str+="================================\n\n\n";
        str+="_________________\n";
        if (isCustCpy) {
            str+="Customer Signature\n"; 
        }else{
            str+="Sales Rep Signature\n"; 
        }
        str+=strSep+"\n\n\n";

        window.sunmiInnerPrinter.printOriginalText(strSep);
        window.sunmiInnerPrinter.printTextWithFont('\n      Jaya Farm\n','Calibri',36);
        window.sunmiInnerPrinter.printTextWithFont('\n   Nattandiya, Marawila\n','Calibri',30);
        window.sunmiInnerPrinter.printTextWithFont('\n          032-2254811\n','Calibri',24);
        // window.sunmiInnerPrinter.printTextWithFont('\n\nReturn Docket: #'+this.docketId+"\n",'Calibri',30);
        window.sunmiInnerPrinter.printOriginalText(str);
        if (!isCustCpy) {
            this.modalController.dismiss({
                'dismissed': true
            });
        }
    }
    
     /**
     * Add empty item to current order items list 
     */
    addItem(){
        // console.log(this.curTrip.tripItems)
        // this.currOrder.isWorking = true;
        this.curReturn.retItems.push(<ReturnItem>{});
        console.log(this.curReturn.retItems)
    }

    /**
     * Remove item from items list
     * @param item - Item object that in current order to be removed 
     */
    removeItem(item){
        let index = this.curReturn.retItems.indexOf(item);
    
        if(index > -1){
            let rmvItemId = this.curReturn.retItems[index].item_id;
            this.toggleUpdateItemList(rmvItemId);
            this.curReturn.retItems.splice(index, 1);
        }
        console.log( this.curReturn.retItems)
    }    

     /**
     * 
     * @param itemId 
     */
    calcPrice(itemId: number){
        let index = this.curReturn.retItems.findIndex(retItem=>retItem.item_id == itemId);
        console.log("index: "+index)
        if (index > -1) {
            let selectedItem = this.curReturn.retItems[index];
            console.log(selectedItem.item_id)
            let itemsIdx = this.items.findIndex(item=>item.item_id == selectedItem.item_id);   
            console.log(itemsIdx) 
            this.curReturn.retItems[index].item_name = this.items[itemsIdx].item_name;    
            this.curReturn.retItems[index].item_unit_name = this.items[itemsIdx].item_unit_name;   
            this.curReturn.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        }
    }

    getAllItems(){
        if (!navigator.onLine){
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        } 
        
        let url = this.storage.svr_url+"ReturnCtrl/getAllItems";
        this.submitting = true;
        this.http.get(url).subscribe((outst: any[])=>{
            this.submitting = false;
            
            if (outst) {
                this.items = outst;
                this.items.map(item=>{
                    item.isSelected = false;
                })
            }
            console.log(outst);
        });
    }

    /**
     * 
     * @param itemId
     */
    toggleUpdateItemList(itemId: number){
        console.log("itemId "+itemId)
        console.log(this.curReturn.retItems)
        let itemIndex = this.curReturn.retItems.findIndex(itemInArra=> itemInArra.item_id == itemId);
        if (itemIndex > -1) {
            console.log("itemIndex "+itemIndex)
            let isSelectd = this.curReturn.retItems[itemIndex].isSelected;
            this.items[itemIndex].isSelected = isSelectd? false: true;
        }   
    }

    async dismiss() {
        if (this.curReturn.retItems.length > 0) {
            const alert = await this.alertController.create({
                mode: "ios",
                header: 'Exit return process',
                message: 'Do you really want to exit and discard the return process?',
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
        }else{
            this.modalController.dismiss({
                'dismissed': true
            });
        }
    }
}
