import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';
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


  constructor(private router: Router) { }

  ngOnInit() {
  }
  validate() {
    this.router.navigate(['/book']);

  }
}
