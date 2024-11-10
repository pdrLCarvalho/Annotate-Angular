import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })

  constructor(public databaseservice : DataBaseService){}

  onSubmit():void{
    const profile : Object = {
      name:String = this.form.value.name,
      email:String = this.form.value.email,
      password:String = this.form.value.password
    }

    this.databaseservice.dataBase.push(profile)

    console.log(this.databaseservice.dataBase);

    this.databaseservice.currentPage = "LOGIN"
  }


}
