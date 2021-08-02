import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin/admin.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  adminForm:FormGroup
  constructor(private fb:FormBuilder, private admin:AdminService, private router:Router) { }

  ngOnInit(): void {
    this.adminForm=this.fb.group({
      email:['',Validators.required],
      name:['',Validators.required],
      password:['',Validators.required]
    })
  }

  async handleSubmit(){
    if(this.adminForm.status=="VALID"){
      let res:any = await this.admin.register(this.adminForm.value);
      alert(res.message);
      if(res.success)
        this.router.navigateByUrl('/login/admin')
    }
    else
      alert('Error please check your inputs')
  }


}
