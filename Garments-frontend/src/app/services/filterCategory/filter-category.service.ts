import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilterCategoryService {

  constructor(private serverUrl:UrlService,private http:HttpClient) { }
  url=`${this.serverUrl.url}/filterConditions`



  getCategories(){
    return this.http.get(`${this.url}`).toPromise();
  }


  addCategory(formData){
    return this.http.post(`${this.url}`,formData).toPromise();
  }

  deleteCategory(id){
    return this.http.delete(`${this.url}/deleteById/${id}`).toPromise();
  }
}
