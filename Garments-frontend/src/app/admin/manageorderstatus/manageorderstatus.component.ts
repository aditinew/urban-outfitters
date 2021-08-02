import { Component, OnInit } from '@angular/core';
import { OrderStatusService } from 'src/app/services/orderStatus/order-status.service';

@Component({
    selector: 'app-manageorderstatus',
    templateUrl: './manageorderstatus.component.html',
    styleUrls: ['./manageorderstatus.component.scss']
})
export class ManageorderstatusComponent implements OnInit {

    statusArr: any;
    updateObj: any;
    constructor(private orderStatus: OrderStatusService) { }

    ngOnInit(): void {
        this.getStatus();
    }



    async getStatus() {
        const res: any = await this.orderStatus.getAllOrderStatus();
        this.statusArr = res.data;
        console.log(this.statusArr)
    }


    async deleteStatus(id) {
        const res: any = await this.orderStatus.removeStatus(id);
        if (res.success)
            this.getStatus()
        alert(res.message)
    }

    setUpdateObj(obj) {
        this.updateObj = obj;
    }

    async setStatusAsDefault(id) {
        const res: any = await this.orderStatus.setStatusAsDefault(id);
        if (res.success)
            this.getStatus()
        alert(res.message)
    }

    async updateStatus() {
        const res: any = await this.orderStatus.updateOrderStatus(this.updateObj, this.updateObj._id);
        if (res.success)
            this.getStatus()
        alert(res.message)
    }

}
