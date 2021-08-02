import { Component, OnInit } from '@angular/core';
import {FormArray,FormBuilder,FormGroup, Validators} from '@angular/forms';

import {RetailerService} from '../../../services/retailer/retailer.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-retailerregister',
  templateUrl: './retailerregister.component.html',
  styleUrls: ['./retailerregister.component.scss']
})
export class RetailerregisterComponent implements OnInit {

  registerForm:FormGroup;
  dataInputToggle = 0;
 file: any;
  id: any;
  docName:any="";

  constructor(private fb:FormBuilder,private retailer:RetailerService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      businessName:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    })
  }

 setFile(event) {
    this.file = event.target.files[0];
    console.log(this.file)
  }


  async handleSubmit() {
    const res: any = await this.retailer.register(this.registerForm.value);
    if (res.success) {

      this.dataInputToggle = 1;
      this.id = res.data
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: `${res.message}`,
      })
    }
    else
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${res.message}`,
      })
  }



 async uploadFile() {
    if (this.file) {

      let form_data = new FormData();
      form_data.append('docName', this.docName);
      form_data.append('file', this.file);
      const res: any = await this.retailer.uploadDocs(form_data, this.id);
      if (res.success) {
        this.router.navigateByUrl('/login/retailer')
        Swal.fire({
          icon: 'success',
          title: `${res.message}`,
        })
      }
    }
    else {
      Swal.fire({
        icon: 'error',
        title: `Please upload document`,
      })
    }
  }

}
