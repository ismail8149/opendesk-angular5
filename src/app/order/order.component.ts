import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  Count: string;
  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.userService.currentCount.subscribe(count => this.Count = count);
  }

}
