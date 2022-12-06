import { Component, OnInit } from '@angular/core';
import { FormControl,ReactiveFormsModule,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',

  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})

export class ActiveVendorComponent implements OnInit {

  constructor() { }
loginForm = new FormGroup ({
  name : new FormControl('',[Validators.required]),
  email : new FormControl('',[Validators.required]),
  bio : new FormControl('',[Validators.required]),
  
})
  
myVal!:any

loginUser()
{
   this.myVal = this.loginForm.value;
this.loginForm.reset();
  
}

get name()
{
  return this.loginForm.get('name')
}

get email()
{
  return this.loginForm.get('email')
}
get bio()
{
  return this.loginForm.get('bio')
}

  ngOnInit(): void {
  }

  
 

}
