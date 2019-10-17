import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: '',
    phone: '',
    username: '',
    name: '',
    conpassword: ''

  };
  resp = '';

  constructor(private testServ: TestService , private router: Router) { }

  ngOnInit() {
  }
  register() {
    if (!this.user.email || !this.user.phone || !this.user.password) {
      alert('fields are requird');
      return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)) {
      alert('invalid email');
      return false;
    }
    if (!/^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(this.user.phone)) {
      alert('enter 10 digit mobile number');
      return false;
    }
    // this.commonService.apiEndPointsCall('api', 'register', this.user).subscribe(res => {
    //   console.log(res);
    //   if (res.status === 200) {
    //     alert('User Registered Successfully.!');
    //     this.routes.navigate(['/']);
    //   } else {
    //     alert('Something went wrong.!');
    //   }

    // }, err => {
    //   if (err.status === 400) {
    //     alert(err.error.msg);
    //   }
    // });
    this.testServ.sample(this.user).subscribe((resp) => {
      console.log('resp', resp);
      if (resp) {
        alert('User Registered Successfully.!');
        this.router.navigate(['/']);
      } else {
        alert('Something went wrong.!');
      }
    });
  }

}
