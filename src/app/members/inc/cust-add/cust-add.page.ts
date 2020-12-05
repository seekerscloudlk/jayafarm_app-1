import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';
import { StorageService } from '../../../services/storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-cust-add',
    templateUrl: './cust-add.page.html',
    styleUrls: ['./cust-add.page.scss'],
})

export class CustAddPage implements OnInit {
    private currRootId: number;
    private custCats: any[] = [];
    private submitting:boolean = false;
    private addCustForm: FormGroup;

    constructor(
        public modalController: ModalController,
        private navParams: NavParams,
        private authService: AuthenticationService,
        private storage: StorageService,
        private http: HttpClient,
        private formBuilder: FormBuilder,
        private  alertController: AlertController,
    ) { 
        this.currRootId = this.navParams.get('currRootId');
        console.log(this.currRootId)
        this.addCustForm = formBuilder.group({
            cust_name: ['', Validators.required],
            address_line1: ['', Validators.required],
            address_line2: [''],
            address_line3: [''],
            cust_email: [''],
            cust_tp: ['', Validators.required],
            cat_id: ['', Validators.required],
            route_id: [this.currRootId],
            cust_id: ['']
          });
    }

    ngOnInit() {
        this.getCustCats();
    }

    async addCust(){
        console.log(this.addCustForm.value)
        if (!navigator.onLine) {
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
            return;
        } 

        const ParseHeaders = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        
        let url = this.storage.svr_url+"CustomerCtrl/addCustomer";
        let postData: any = this.addCustForm.value;
        
        this.submitting = true;
      
        const alert = await this.alertController.create({
            mode: "ios",
            header: 'Confirm adding new customer',
            message: 'Do you really want to add customer?',
            buttons: [
                {   text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => { this.submitting = false; }
                },
                {   text: 'Add Customer',
                    handler: () => {
                        console.log(postData)
                        this.http.post(url, postData, ParseHeaders).subscribe((res) => {
                            this.submitting = false;
                            console.log(res)
                            if (res !== false ) {
                                this.authService.showToast("<b>The customer added successfully..<ion-icon name='checkmark-circle-outline'></ion-icon></b>");
                                this.modalController.dismiss({
                                    'dismissed': true,
                                    'isAdded': true
                                });
                            } else {
                                this.authService.showToast('Problem adding customer..');
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

    getCustCats(){
        if (!navigator.onLine)
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");

        let url = this.storage.svr_url+"CustomerCtrl/getCustCats";
        this.submitting = true;
        this.http.get(url).subscribe((custCats: any)=>{
            
            console.log(custCats);
            if (custCats){
                this.custCats = custCats;
            }
        });
        this.submitting = false;
    }

    dismiss() {
        this.modalController.dismiss({
            'dismissed': true,
        });
    }
}
