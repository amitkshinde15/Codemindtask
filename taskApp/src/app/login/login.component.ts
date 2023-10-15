import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg;
  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit() {
  }
  onSubmit(data){
    console.log('user data',data.value);
    
    if (this.authService.authenticate(data.value.email, data.value.password)) {
      this.router.navigate(['/post']);
    } else {
      this.errorMsg = 'Unauthorised user';
    }
  }
  }

