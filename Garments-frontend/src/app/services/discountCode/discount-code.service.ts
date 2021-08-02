import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DiscountCodeService {

    constructor(private mainurl: UrlService, private http: HttpClient) { }

    url = `${this.mainurl.url}/discountCode`;

    getAll() {
        return this.http.get(this.url).toPromise();
    }

    getById(id) {
        return this.http.get(`${this.url}/getById/${id}`).toPromise();
    }

    add(formObj) {
        return this.http.post(`${this.url}`, formObj).toPromise();
    }

    updateById(id, formObj) {
        return this.http.patch(`${this.url}/updateById/${id}`, formObj).toPromise();
    }

    deleteById(id) {
        return this.http.delete(`${this.url}/deleteById/${id}`).toPromise();
    }

    validateCode(code) {
        return this.http.get(`${this.url}/validateCode/${code}`).toPromise();
    }



}
