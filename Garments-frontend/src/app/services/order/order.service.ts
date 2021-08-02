import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private serverUrl: UrlService, private http: HttpClient, private router: Router) { }
    url = `${this.serverUrl.url}/order`

    getAllValidOrdersByRetailerId(id){
        return this.http.get(`${this.url}/validOrdersByRetailerId/${id}`).toPromise();
    }

    orderNow(formObj) {
        return this.http.post(`${this.url}/`, formObj).toPromise();
    }
    getAllValidOrdersBySellerId(id) {
        return this.http.get(`${this.url}/validOrdersBySellerId/${id}`).toPromise();
    }

    getAllValidOrders() {
        return this.http.get(`${this.url}/validOrders`).toPromise();
    }


    buySample(formObj) {
        return this.http.post(`${this.url}/buySample`, formObj).toPromise();
    }

    addOrderStatus(orderId, orderStatusId) {
        return this.http.patch(`${this.url}/addOrderStatus/${orderId}`, { orderStatusId: orderStatusId }).toPromise();
    }

    setOrderAsCompleted(orderId) {
        return this.http.patch(`${this.url}/markOrderAsCompleted/${orderId}`, {}).toPromise();
    }

    cancelOrder(id){
        return this.http.patch(`${this.url}/orderCancel/${id}`, {}).toPromise();
    }


}
