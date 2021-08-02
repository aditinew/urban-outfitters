import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { WholesalerService } from '../../../services/wholesaler/wholesaler.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-wholesalerregister',
  templateUrl: './wholesalerregister.component.html',
  styleUrls: ['./wholesalerregister.component.scss']
})
export class WholesalerregisterComponent implements OnInit {
  dataInputToggle = 0;
  registerForm: FormGroup;
  file: any;
  id: any;
  docName:any="";
  constructor(private fb: FormBuilder, private seller: WholesalerService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      businessName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  setFile(event) {
    this.file = event.target.files[0];
    console.log(this.file)
  }


  async handleSubmit() {
    // this.dataInputToggle = 1;
    let form_data = new FormData();
    form_data.append('file', this.file)
    const res: any = await this.seller.register(this.registerForm.value);
    if (res.success) {
      this.dataInputToggle = 1;
      this.id = res.data                ///setting registration id
      Swal.fire({
        icon: 'success',
        title: `${res.message}`,
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: `${res.message}`,
      })
    }
  }

  async uploadFile() {
    if (this.file) {

      let form_data = new FormData();
      form_data.append('docName', this.docName);
      form_data.append('file', this.file);
      const res: any = await this.seller.uploadDocs(form_data, this.id);
      if (res.success) {

        this.router.navigateByUrl("/wholesaler")
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
