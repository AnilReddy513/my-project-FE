import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-validpin',
  templateUrl: './validpin.component.html',
  styleUrl: './validpin.component.css'
})
export class ValidpinComponent {
  mpinForm!: FormGroup;
  errorMessage:string='';


  constructor(public fb:FormBuilder){
    this.mpinForm = this.fb.group({
      mpin1:['',[Validators.required,Validators.pattern(/^\d{4}$/)]],
      mpin2:['',[Validators.required,Validators.pattern(/^\d{4}$/)]],
    });
  }

  validatePin(){
    const mpin1 = this.mpinForm.value.mpin1;
    const mpin2 = this.mpinForm.value.mpin2;
    console.log(mpin1, mpin2,"values of mpin1 , mpin2");

    if(this.isInvalidPin(mpin1) || this.isInvalidPin(mpin2)){
      this.errorMessage ="both are following 1111 or 1234";
       return   
      }
    if(mpin1 !== mpin2){
this.errorMessage = "mis match error";
return
    }
    else{
      console.log("correct");
      
    }



  }


  isInvalidPin(pin:any):boolean{
     if(/^(\d)\1+$/.test(pin)){
      return true;
      }
const incresaing=['0123','1234','2345','3456','4567','5678','6789',]
      if(incresaing.includes(pin)){
return true
      }
      return false
  }

}
