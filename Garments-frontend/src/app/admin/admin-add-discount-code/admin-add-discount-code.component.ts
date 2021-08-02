import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DiscountCodeService } from 'src/app/services/discountCode/discount-code.service';

@Component({
    selector: 'app-admin-add-discount-code',
    templateUrl: './admin-add-discount-code.component.html',
    styleUrls: ['./admin-add-discount-code.component.scss']
})
export class AdminAddDiscountCodeComponent implements OnInit {

    constructor(private fb: FormBuilder, private discount: DiscountCodeService) { }

    discountForm: FormGroup;

    ngOnInit(): void {
        this.discountForm = this.fb.group(({
            name: [''],
            code: [''],
            type: ['1'],
            value: [0],
            maxDiscount: [0],
            validFrom: [''],
            validTill: [''],
        }))
    }

    async addDiscount() {
        const res: any = await this.discount.add(this.discountForm.value);
        if (res.success)
            this.discountForm.reset()
        alert(res.message)
    }

}
