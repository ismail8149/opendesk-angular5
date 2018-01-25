import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public itemDetails: any;
  constructor(private userService: UserService) { }

  getData() {
      this.itemDetails =  this.userService.getSelectedData();
  }
  ngOnInit() {
    this.getData();
  }

  onCheckoutItem () {
    this.userService.changeCount(0);
  }

}
