import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { RetailerService } from 'src/app/services/retailer/retailer.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
    selector: 'app-indexproductdetails',
    templateUrl: './indexproductdetails.component.html',
    styleUrls: ['./indexproductdetails.component.scss']
})
export class IndexproductdetailsComponent implements OnInit {
    SetVisibility=1;

    billingObj: any = {
        name: '',
        email: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        pinCode: '',

    }
    imgArr: Array<any> = [];
    imgSrc: String;
    id: any;
    productObj: any;
    productArr: any;
    constructor(private product: ProductService, private route: ActivatedRoute, private retailer: RetailerService, private router: Router, private category: CategoryService, private order: OrderService) {

    }

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) { // stackoverflow link : https://stackoverflow.com/questions/59354031/how-to-run-a-function-when-a-route-changes-in-angular
                this.getProductById()
            }
        })
        this.getProductById();

    }

    setImgSrc(val: String) {
        this.imgSrc = val
    }

    async getProductById() {
        this.id = this.route.snapshot.params['id']
        const res: any = await this.product.getProductById(this.id);
        this.productObj = res.data;
        this.imgArr = this.productObj.imageArray;
        this.imgSrc = this.productObj.imageArray[0];
        console.log(this.productObj)
        const res2: any = await this.product.getProductsByCategoryId(this.productObj.categoryId)
        if (res2.success)
            this.productArr = res2.data.filter(el => el._id != this.id);



        if (this.productArr.length > 6) {
            console.log(this.productArr.length)
            this.productArr = this.productArr.filter((el, i) => i < 6);
        }

    }

    async addToCart() {
        let obj = {
            productId: this.productObj._id,
            quantity: 1
        }
        console.log(this.retailer.getJwt())
        if (this.retailer.getJwt() == null) {
            this.router.navigateByUrl('/login')
        }
        else {
            const id = this.retailer.getJwt()._id;
            const res: any = await this.retailer.addToCart(obj, id);
            alert(res.message)
        }
    }

    async buySample() {
        let obj = {
            retailerId: this.retailer.getJwt()._id,
            productId: this.productObj._id,
            billingObj: this.billingObj
        }
        const res: any = await this.order.buySample(obj)
        if (res.success) {
            window.location.href = res.data
        }
        else
            alert(res.message)
    }

}
