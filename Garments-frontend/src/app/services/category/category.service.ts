import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';



@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private serverUrl: UrlService, private http: HttpClient) { }
    url = `${this.serverUrl.url}/category`



    getCategories() {
        return this.http.get(`${this.url}`).toPromise();
    }

    getById(id) {
        return this.http.get(`${this.url}/getById/${id}`).toPromise();
    }


    addCategory(formData) {
        return this.http.post(`${this.url}`, formData).toPromise();
    }

    deleteCategory(id) {
        return this.http.delete(`${this.url}/deleteById/${id}`).toPromise();
    }

    updateImage(formData, id) {
        return this.http.patch(`${this.url}/updateImage/${id}`, formData).toPromise();
    }

    getByName(name) {
        return this.http.get(`${this.url}/getByName/${name}`).toPromise();
    }
}
