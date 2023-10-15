import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  @ViewChild('registerUser', { static: false }) registerUser:NgForm;

  constructor(private userserice: UserService) { }

  ngOnInit() {
  }
  createUser(userData){
    console.log(userData.value);
    this.userserice.createUser(userData.value);
    this.registerUser.resetForm();
  }
}
