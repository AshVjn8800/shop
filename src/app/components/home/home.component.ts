import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { RouterLink } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = {
    username: '',
    password: ''
  };


  constructor() { }

  ngOnInit() {
  }
  validate() {
    console.log(this.user);

  }
}
