import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrandService } from '../../services/brand/brand.service';

@Component({
    selector: 'app-admin-add-brand',
    templateUrl: './admin-add-brand.component.html',
    styleUrls: ['./admin-add-brand.component.scss']
})
export class AdminAddBrandComponent implements OnInit {

    constructor(private fb: FormBuilder, private Brand: BrandService) { }

    brandForm: FormGroup;

    ngOnInit(): void {
        this.brandForm = this.fb.group({
            name: ['']
        })
    }

    async addBrand() {
        const res: any = await this.Brand.add(this.brandForm.value)
        alert(res.message)
        if (res.success)
            this.brandForm.get('name').patchValue('');
    }

}
