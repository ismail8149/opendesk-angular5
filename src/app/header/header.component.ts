import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Count: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.currentCount.subscribe(count => this.Count = count);
  }

}
