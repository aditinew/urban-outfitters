import { Component, OnInit } from '@angular/core';
import { RetailerService } from 'src/app/services/retailer/retailer.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  ordersArr: Array<any> = []
  completedOrdersArr: Array<any> = []
  currentOrdersArr: Array<any> = []
  modalObj: any

  constructor(private retailer: RetailerService, private router: Router, private order:OrderService) { }

  ngOnInit(): void {
    this.getUserOrders()
  }

  async getUserOrders() {
    const res:any = await this.order.getAllValidOrdersByRetailerId(this.retailer.getJwt()._id)
    console.log(res)
    if(res.success)
      {
        this.ordersArr = res.data.reverse().sort((el1,el2)=>{
        if(el1.completedBool == el2.completedBool)
          return 0 
        else if(el1.completedBool==true)
          return 1
        else
          return -1
        }) ;
      }
    else
      alert(res.message)

  }

  async orderAgain(productId, quantity) {
    let obj = {
      productId,
      quantity
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

  setModalObj(obj)
  {
    this.modalObj = obj
  }

}
