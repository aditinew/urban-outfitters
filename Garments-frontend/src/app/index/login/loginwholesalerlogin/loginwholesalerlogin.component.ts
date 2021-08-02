import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WholesalerService } from '../../../services/wholesaler/wholesaler.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
    selector: 'app-loginwholesalerlogin',
    templateUrl: './loginwholesalerlogin.component.html',
    styleUrls: ['./loginwholesalerlogin.component.scss']
})
export class LoginwholesalerloginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private seller: WholesalerService, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }


    async handleSubmit() {
        const res: any = await this.seller.login(this.loginForm.value);
        if (res.success) {
            this.seller.setJwt(res.data);
            this.router.navigateByUrl('/wholesaler')
            Swal.fire({
                icon: 'success',
                title: `${res.message}`
            })
        }
        else
            Swal.fire({
                icon: 'error',
                title: `${res.message}`
            })
    }
}
