import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RetailerService } from '../../../services/retailer/retailer.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
    selector: 'app-loginretialerlogin',
    templateUrl: './loginretialerlogin.component.html',
    styleUrls: ['./loginretialerlogin.component.scss']
})
export class LoginretialerloginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private retailer: RetailerService, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }


    async handleSubmit() {
        const res: any = await this.retailer.login(this.loginForm.value);
        if (res.success) {
            this.retailer.setJwt(res.data)
            this.router.navigateByUrl('/')
            Swal.fire({
                icon: 'success',
                title: `${res.message}`
            })
        }
        else
            Swal.fire({
                icon: 'error',
                title: `${res.message}`,
            })
    }
}
