import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-tgcheckout',
  templateUrl: './tgcheckout.component.html',
  styleUrls: ['./tgcheckout.component.css']
})
export class TgcheckoutComponent implements OnInit {

  constructor(public authService:AuthService) { }
  handler:any = null;
  ngOnInit(): void {

    this.loadStripe();
  }

pay(amount) {    
 
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token)
      alert('Payment Successful!!');
    }
  });

  handler.open({
    name: 'Event-IT',
    description: 'Payment',
    amount: amount * 100
  });
}

loadStripe() {
     
  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
    s.onload = () => {
      this.handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Payment Success!!');
        }
      });
    }
     
    window.document.body.appendChild(s);
  }
}


}
