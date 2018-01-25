import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService  {
  private serverUrl = 'http://5a12745f748faa001280a746.mockapi.io/v1/stores/item';
  public selectedData;

  private messageSource = new BehaviorSubject<string>('0');
  currentCount = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  getItemDetails() {
    return this.http.get(this.serverUrl);
  }
  setSelectedData (data) {
    this.selectedData = data;
  }
  getSelectedData () {
    return this.selectedData;
  }

  changeCount(count) {
    this.messageSource.next(count);
  }
}
