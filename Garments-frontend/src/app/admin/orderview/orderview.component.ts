import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { OrderStatusService } from 'src/app/services/orderStatus/order-status.service';

@Component({
    selector: 'app-orderview',
    templateUrl: './orderview.component.html',
    styleUrls: ['./orderview.component.scss']
})
export class OrderviewComponent implements OnInit {

    orderArr: any = [];
    orderCompletedArr: any = [];
    updateObj: any;
    orderStatusArr: Array<any> = [];
    orderStatusId: any;

    constructor(private order: OrderService, private orderStatus: OrderStatusService) { }

    ngOnInit(): void {
        this.getVaildOrders();
        this.getOrderStatus();
    }

    async getOrderStatus() {
        const res: any = await this.orderStatus.getAllOrderStatus();
        if (res.success) {
            this.orderStatusArr = res.data;
        }

    }

    async getVaildOrders() {
        let res: any = await this.order.getAllValidOrders()
        if (res.success) {
            this.orderArr = res.data.filter(el => !el.completedBool);
            this.orderCompletedArr = res.data.filter(el => el.completedBool);
        }
        console.log(this.orderArr)
    }

    setUpdateObj(obj) {
        this.updateObj = obj;
        console.log(obj)
    }


    async updateOrderStatus() {
        const res: any = await this.order.addOrderStatus(this.updateObj._id, this.orderStatusId)
        alert(res.message)
        if (res.success) {
            this.ngOnInit();
            this.orderStatusId = "";
        }
    }

    async markOrderAsCompleted(id) {
        const res: any = await this.order.setOrderAsCompleted(id)
        if (res.success)
            this.ngOnInit()
        alert(res.message);

    }

}
