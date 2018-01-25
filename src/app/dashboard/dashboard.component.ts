import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public itemDetails: any;
  public selectedItem: any = [];
  constructor(private userService: UserService) { }

  getData() {
    this.userService.getItemDetails().subscribe(data => {
      this.itemDetails = data;
      this.itemDetails.forEach(function (obj) {
        obj.quantity = 0;
      });
    } );
  }
  ngOnInit() {
    this.getData();
  }

  cardDisplay() {
    let cartCount = 0;
    this.selectedItem.forEach(function (obj) {
      cartCount += obj.quantity;
    });
    this.userService.changeCount(cartCount);
  }

  onIncrease (index) {
    this.itemDetails[index].quantity++;
    const indexName = this.itemDetails[index].name;
    const slected = this.selectedItem;
    const indexObj = _.findIndex(this.selectedItem, function(obj, ind) {return slected[ind].name === indexName; });
    if ( indexObj !== -1) {
       this.selectedItem[indexObj].quantity = this.itemDetails[index].quantity;
    } else {
      this.selectedItem.push(this.itemDetails[index]);
    }
    this.cardDisplay();
  }

  // on no.of Item decrease
  onDecrease (index) {
    if (this.itemDetails[index].quantity > 0) {
      this.itemDetails[index].quantity--;
      const indexName1 = this.itemDetails[index].name;
      const slected1 = this.selectedItem;
      const indexObj1 = _.findIndex(this.selectedItem, function(obj, ind) {return slected1[ind].name === indexName1; });
      this.selectedItem[indexObj1].quantity = this.itemDetails[index].quantity;
      if (this.itemDetails[index].quantity === 0) {
        if ( indexObj1 !== -1) {
          this.selectedItem.splice(indexObj1, 1);
        }
      }
      this.cardDisplay();
    }
  }
  onConfirmYourItem () {
    this.userService.setSelectedData(this.selectedItem);
  }
}
