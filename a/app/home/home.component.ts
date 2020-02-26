import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  userData: any;
  isAdmin: boolean = false;

  constructor() {
    setTimeout(() => {
      this.userData = {
        name: 'Yogi',
        role: 'user'
      };
      this.isAdmin = this.userData.role === 'admin' ? true : false;
    }, 3000);
  }

  ngOnInit() {
  }

}
