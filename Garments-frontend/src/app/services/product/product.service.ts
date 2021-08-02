import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private serverUrl: UrlService, private http: HttpClient, private router: Router) { }
    url = `${this.serverUrl.url}/product`



    add(obj) {
        return this.http.post(`${this.url}/`, obj).toPromise();
    }
    updateImage(obj, id) {
        return this.http.patch(`${this.url}/updateImage/${id}`, obj).toPromise();
    }
    updateProduct(obj, id) {
        return this.http.patch(`${this.url}/updateProduct/${id}`, obj).toPromise();
    }
    getProductsBySellerId(id) {
        return this.http.get(`${this.url}/getProductsBySeller/${id}`).toPromise();
    }
    getProductsByCategoryId(id) {
        return this.http.get(`${this.url}/getProductsByCategory/${id}`).toPromise();
    }
    getAllProducts() {
        return this.http.get(`${this.url}/getAllProducts`).toPromise();
    }
    getProductById(id) {
        return this.http.get(`${this.url}/getById/${id}`).toPromise()
    }
    deleteProduct(id) {
        return this.http.delete(`${this.url}/deleteProduct/${id}`).toPromise()
    }

    searchProduct(val) {
        return this.http.get(`${this.url}/search/${val}`).toPromise();
    }


    addToStock(obj, id) {
        return this.http.patch(`${this.url}/addToStock/${id}`, obj).toPromise();
    }


}
