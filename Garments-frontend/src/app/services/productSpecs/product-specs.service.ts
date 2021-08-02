import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ProductSpecsService {

    constructor(private serverUrl: UrlService, private http: HttpClient) { }
    url = `${this.serverUrl.url}/productSpecification`

    add(obj) {
        return this.http.post(`${this.url}/`, obj).toPromise();
    }
    getAllSpecs() {
        return this.http.get(`${this.url}/getallSpecs`).toPromise();
    }

    getById(id) {
        return this.http.get(`${this.url}/getById/${id}`).toPromise();
    }

    deleteSpec(id) {
        return this.http.delete(`${this.url}/deleteSpec/${id}`).toPromise();
    }

}
