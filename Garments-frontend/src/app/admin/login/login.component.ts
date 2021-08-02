import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  adminForm:FormGroup
  constructor(private fb:FormBuilder, private admin:AdminService, private router:Router) { }

  ngOnInit(): void {
    this.adminForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  async handleSubmit(){
    if(this.adminForm.status=="VALID"){
      let res:any = await this.admin.login(this.adminForm.value);
      console.log(res)
      this.admin.setJwt(res.data)
      alert(res.message)
      this.router.navigateByUrl('/admin')

    }
    else
      alert('Error please check your inputs')
  }


}
