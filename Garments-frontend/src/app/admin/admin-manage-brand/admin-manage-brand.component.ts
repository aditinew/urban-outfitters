import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
    selector: 'app-admin-manage-brand',
    templateUrl: './admin-manage-brand.component.html',
    styleUrls: ['./admin-manage-brand.component.scss']
})
export class AdminManageBrandComponent implements OnInit {

    brandArr: Array<any> = []

    constructor(private Brand: BrandService) { }

    ngOnInit(): void {
        this.getAllBrands()
    }

    async getAllBrands() {
        const res: any = await this.Brand.getAll();
        if (res.success)
            this.brandArr = res.data
    }

    async deleteBrandById(id) {
        const res: any = await this.Brand.deleteById(id);
        if (res.success)
            this.getAllBrands()
        alert(res.message)
    }

}
