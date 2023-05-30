import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  displayname = '';
  displayaddress = '';
  displayemail = '';


  getValue(name: string, address: string, email: string){
    this.displayname = name;
    this.displayaddress = address;
    this.displayemail = email
  }
}
