import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class OrderStatusService {

    constructor(private serverUrl: UrlService, private http: HttpClient) { }
    url = `${this.serverUrl.url}/OrderStatus`;

    add(formData) {
        return this.http.post(`${this.url}/`, formData).toPromise()
    }

    getAllOrderStatus() {
        return this.http.get(`${this.url}/`).toPromise();
    }

    updateOrderStatus(formData, id) {
        return this.http.patch(`${this.url}/updateStatus/${id}`, formData).toPromise()
    }

    removeStatus(id) {
        return this.http.delete(`${this.url}/removeStatus/${id}`).toPromise();
    }


    setStatusAsDefault(id) {
        return this.http.patch(`${this.url}/setAsDefault/${id}`, {}).toPromise()
    }

}
