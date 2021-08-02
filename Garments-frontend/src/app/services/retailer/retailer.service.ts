import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  constructor(private serverUrl:UrlService,private http:HttpClient,private router:Router) { }
  url=`${this.serverUrl.url}/retailer`

  setJwt(token){
    localStorage.setItem('gim-retailer-token',token);
 }
 getJwt(){
   const token= localStorage.getItem('gim-retailer-token');
   if(token)
   {
    let payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload);
    }
   else
     return null
 }
  removeJwt(){
    localStorage.removeItem('gim-retailer-token');
    this.router.navigateByUrl('/login/retailer');
 }
  register(formData){
    return this.http.post(`${this.url}/register`,formData).toPromise();
  }

  login(formData){
    return this.http.post(`${this.url}/login`,formData).toPromise()
  }

  addToCart(formData,id){
    return this.http.patch(`${this.url}/addToCart/${id}`,formData).toPromise()
  }

  updateRetailer(formData,id){
    return this.http.patch(`${this.url}/updateRetailer/${id}`,formData).toPromise()

  }

  getUserById(id){
    return this.http.get(`${this.url}/getById/${id}`).toPromise()
  }

  uploadDocs(formData, id) {
    return this.http.patch(`${this.url}/uploadDocs/${id}`, formData).toPromise();
  }

  verifyDocs(formData, id) {
    return this.http.patch(`${this.url}/verifyOrRejectDocument/${id}`, formData).toPromise();
  }

  getVerifyDocs() {
    return this.http.get(`${this.url}/getVerifyDocs`).toPromise();
  }

}
