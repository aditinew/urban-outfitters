import { Component, OnInit } from '@angular/core';
import { DiscountCodeService } from 'src/app/services/discountCode/discount-code.service';

@Component({
    selector: 'app-admin-manage-discount-code',
    templateUrl: './admin-manage-discount-code.component.html',
    styleUrls: ['./admin-manage-discount-code.component.scss']
})
export class AdminManageDiscountCodeComponent implements OnInit {

    discountArr: any = []
    constructor(private DiscountCode: DiscountCodeService) { }

    ngOnInit(): void {
        this.getAllDiscountCodes();
    }

    async getAllDiscountCodes() {
        const res: any = await this.DiscountCode.getAll()
        this.discountArr = res.data
    }

    async deleteDiscount(id) {
        const res: any = await this.DiscountCode.deleteById(id)
        alert(res.message)
        this.getAllDiscountCodes()

    }

}
