import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WholesalerService {

  constructor(private serverUrl: UrlService, private http: HttpClient, private router: Router) { }
  url = `${this.serverUrl.url}/seller`



  setJwt(token) {
    localStorage.setItem('gim-wholesaler-token', token);
  }
  getJwt() {
    const token = localStorage.getItem('gim-wholesaler-token');
    console.log("token")
    if (token) {
      let payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload);
    }
    else
      return null
  }
  removeJwt() {
    localStorage.removeItem('gim-wholesaler-token');
    this.router.navigateByUrl('/login/wholesaler');
  }


  register(formData) {
    return this.http.post(`${this.url}/register`, formData).toPromise();
  }

  login(formData) {
    return this.http.post(`${this.url}/login`, formData).toPromise()
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

  getById(id)
  {
    return this.http.get(`${this.url}/getById/${id}`).toPromise();
  }

}
