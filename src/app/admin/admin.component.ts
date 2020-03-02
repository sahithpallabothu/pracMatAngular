import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../bussinessclass/admin';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm: FormGroup;
  adminData:Admin;
  constructor(private formbulider: FormBuilder) { }
  isGenderSelected:boolean;
  ngOnInit() {
    this.adminForm=this.formbulider.group({
      adminName:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      gender:new FormControl('',[Validators.required]),
      adminType:new FormControl('',[Validators.required])
    });
  }

  onFormSubmit(){
      this.adminData=this.adminForm.value;
      if(this.adminForm.valid){
        console.log(this.adminData);
      }
  }
  
  onGenderSelected(event){
    if(event.value!=-1){
      this.isGenderSelected=true;
    }else{
      this.isGenderSelected=false;
    }
  }
  
  public hasError = (controlName: string, errorName: string) => {
		return this.adminForm.controls[controlName].hasError(errorName);
	}

}
