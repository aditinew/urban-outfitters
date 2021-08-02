import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { WholesalerService } from 'src/app/services/wholesaler/wholesaler.service';

@Component({
    selector: 'app-wholesalerstockmanage',
    templateUrl: './wholesalerstockmanage.component.html',
    styleUrls: ['./wholesalerstockmanage.component.scss']
})
export class WholesalerstockmanageComponent implements OnInit {

    updateObj;
    productsArr;
    stock: any = 0

    constructor(private product: ProductService, private seller: WholesalerService) { }

    ngOnInit(): void {
        this.getProducts();
    }

    setUpdateObj(obj) {
        this.updateObj = obj
    }

    async getProducts() {
        const res: any = await this.product.getProductsBySellerId(this.seller.getJwt()._id)
        if (res.success)
            this.productsArr = res.data
        console.log(res)
    }

    async updateStock() {
        let obj = {
            stock: this.stock
        }
        const res: any = await this.product.addToStock(obj, this.updateObj._id);
        if (res.success) {
            this.stock = '0';
            this.ngOnInit();
        }
        alert(res.message)

    }


}
