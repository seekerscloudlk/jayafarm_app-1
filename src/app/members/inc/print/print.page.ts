import { Component, OnInit } from '@angular/core';
import { Base64 } from '@ionic-native/base64/ngx';

declare var window: any;

@Component({
  selector: 'app-print',
  templateUrl: './print.page.html',
  styleUrls: ['./print.page.scss'],
})
export class PrintPage implements OnInit {

//   constructor() { }
  
  constructor( private base64: Base64 ) {
    
    }

    ngOnInit() {
        // let filePath: string = 'file///C:/Users/user/Desktop/vehicle.jpg';
        // this.base64.encodeFile(filePath).then((base64File: string) => {
        //     console.log(base64File)
        // }, (err) => {
        // console.log(err);
        // });


        // window.sunmiInnerPrinter.ReceiptPage();


        // printOriginalText("qdqwdqd\n\n\n\nddddd\nefwfw\n\n");
        // let str: string = "PGltYWdlIHJlc29sdXRpb249IjE5MjB4MTIwMCI+DQogICAgPHBsYXRlPg0KICAgICAgICA8Y29vcmRpbmF0ZT4NCiAgICAgICAgICAgIDx0b3AtbGVmdD4NCiAgICAgICAgICAgICAgICA8eD44NDg8L3g+DQogICAgICAgICAgICAgICAgPHk+NTc4PC95Pg0KICAgICAgICAgICAgPC90b3AtbGVmdD4NCiAgICAgICAgICAgIDxib3R0b20tcmlnaHQ+IA0KICAgICAgICAgICAgICAgIDx4PjExNzY8L3g+DQogICAgICAgICAgICAgICAgPHk+Njc2PC95Pg0KICAgICAgICAgICAgPC9ib3R0b20tcmlnaHQ+DQogICAgICAgIDwvY29vcmRpbmF0ZT4NCiAgICAgICAgPGNvbnRlbnQ+DQogICAgICAgICAgICA8dGV4dD5MOTY3MVVYPC90ZXh0Pg0KICAgICAgICA8L2NvbnRlbnQ+DQogICAgPC9wbGF0ZT4NCjwvaW1hZ2U+"
        // window.sunmiInnerPrinter.printBitmap(str, 80, 80,
        //     function(okay){
        //     console.log('okay: '+ JSON.stringify(okay));
        //     }.bind(this),
        //     function(error){
        //     console.log('ERROR: '+ JSON.stringify(error));
        //     }.bind(this)
        //     );
    }
    // ionViewDidLoad() {
    //     console.log('ionViewDidLoad ReceiptPage');
    // }
    // print(){
    // try {
    // if (JSON.stringify(sunmiInnerPrinter) !== "{}") {
    // return;
    // }
    // // it is safe to use sunmiInnerPrinter here
    // } catch(err) {
    // console.log("error: "+ JSON.stringify(err));
    // }
    // // (window).plugins.sunmiInnerPrinter.printOriginalText("Hello Printer");
    // // (window).plugins.sunmiInnerPrinter.printString("Hello String!");
    // // sunmiInnerPrinter.printOriginalText("Hello Printer");
    // }
    }