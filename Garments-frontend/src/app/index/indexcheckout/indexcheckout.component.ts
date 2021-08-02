import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { RetailerService } from 'src/app/services/retailer/retailer.service';
import { DiscountCodeService } from 'src/app/services/discountCode/discount-code.service';
import { OrderService } from 'src/app/services/order/order.service';
import { CommissionService } from 'src/app/services/commission/commission.service';

@Component({
    selector: 'app-indexcheckout',
    templateUrl: './indexcheckout.component.html',
    styleUrls: ['./indexcheckout.component.scss']
})
export class IndexcheckoutComponent implements OnInit {
    SetVisibility=0;
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
    discountCode
    userObj: any = [];
    cartProductArr: any = []
    totalMainPrice: any = 0;
    discountAmount: any = 0;
    finalPrice: any = 0;
    applyDiscountBool: Boolean = false;
    appliedCode: String = '';
    discountObj: any = {};
    cartArr: any = {};
    commisionObj:any ={value:5}; // default 5%
    gst:any=5;// 5%
    commissionAmount:any=0;
    gstAmount:any=0;
    constructor(private retailer: RetailerService, private router: Router, private product: ProductService, private discountService: DiscountCodeService, private Order: OrderService, private commission:CommissionService) { }

    ngOnInit(): void {
      this.getCommissionObj();
        this.getCart()
    }
    setTab(val){
        this.SetVisibility=val;
        console.log(this.SetVisibility);
    
      }

    async getCommissionObj(){
      const res:any = await this.commission.getCommission();
      if(res.success)
        this.commisionObj = res.data
    }

    async getCart() {
        const id = this.retailer.getJwt()._id;
        const res: any = await this.retailer.getUserById(id);
        this.userObj = res.data;
        this.cartArr = this.userObj.cart;
        console.log(this.cartArr)
        if(this.userObj.cart.length>0)
        this.SetVisibility=1;

        for (let el of this.userObj.cart) {

            const prodRes: any = await this.product.getProductById(el.productId)
            let obj = {
                orderedQuantity: el.quantity,
                ...prodRes.data
            }
            this.cartProductArr.push(obj)


        }
        this.calculatePrice();
        console.log(this.cartProductArr)
        // alert(res.message)
    }

    // 0 for minus 1 for plus
    setQuantity(val, index) {

        if (val == 0) {
            if (this.cartProductArr[index].orderedQuantity > this.cartProductArr[index].minQuantity) {
                this.cartProductArr[index].orderedQuantity -= 1
                this.cartArr[index].quantity -= 1
                this.calculatePrice();

            }
        }
        else {

            this.cartProductArr[index].orderedQuantity += 1
            this.cartArr[index].quantity += 1
            this.calculatePrice()
        }
        this.updateCart();
    }

    async applyDiscountCode() {
        const res: any = await this.discountService.validateCode(this.discountCode)
        if (res.success) {
            this.applyDiscountBool = true;
            this.appliedCode = this.discountCode;
            this.discountObj = res.data
            this.calculatePrice();
            this.updateCart();
        }
        else {
            this.applyDiscountBool = false;
            this.appliedCode = '';
            this.discountObj = {};
            this.calculatePrice();
            this.updateCart();
        }
        alert(res.message)
    }

    removeFromCart(index) {
        this.cartProductArr = this.cartProductArr.filter((el, i) => index != i);
        this.cartArr = this.cartArr.filter((el, i) => index != i);
        this.calculatePrice();
        this.updateCart();
    }


    calculatePrice() {

        this.totalMainPrice = 0;
        this.discountAmount = 0;
        this.finalPrice = 0;

        this.cartProductArr.forEach(el => {
            let totalNumberOfItems = 0;
            totalNumberOfItems = el.orderedQuantity * el.setItemQuantity;
            let objPrice = totalNumberOfItems * el.mrp;
            this.totalMainPrice = this.totalMainPrice + objPrice;
        })
        if (this.applyDiscountBool) {
            if (this.discountObj.type == 1) {
                this.discountAmount = this.totalMainPrice * this.discountObj.value / 100
            }
            else if (this.discountObj.type == 2) {
                this.discountAmount = this.discountObj.value
            }

            if (this.discountObj.maxDiscount)
                if (this.discountAmount > this.discountObj.maxDiscount)
                    this.discountAmount = this.discountObj.maxDiscount;

            this.finalPrice = this.totalMainPrice - this.discountAmount
        }
        else {
            this.finalPrice = this.totalMainPrice;

        }

        console.log(this.totalMainPrice, this.discountAmount, this.finalPrice)
        this.commissionAmount = this.finalPrice * this.commisionObj.value /100;

        this.finalPrice += this.commissionAmount;
        this.gstAmount = this.finalPrice * 5/100;

        this.finalPrice = this.finalPrice + this.gstAmount;

    }

    async updateCart() {
        const res: any = await this.retailer.updateRetailer({ cart: this.cartArr }, this.retailer.getJwt()._id)
        console.log("CartUpdated")
        return res.success

    }

    async orderNow() {
      try{

        console.log(this.billingObj)
        console.log(this.discountObj._id)
        console.log(this.cartArr)

        let obj = {
            retailerId: this.retailer.getJwt()._id,
            discountId: this.discountObj._id,
            cartArr: this.cartArr,
            billingObj: this.billingObj,
        }

        const res: any = await this.Order.orderNow(obj)
        console.log(res)
        if (res.success)
            window.location.href = (res.data)
        else
            alert(res.message)

      }
      catch(err)
      {
        console.error(err)
        alert(err.message)

      }
    }


}


