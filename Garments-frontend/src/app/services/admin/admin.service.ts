import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private serverUrl:UrlService,private http:HttpClient,private router:Router) { }
  url=`${this.serverUrl.url}/admin`



  setJwt(token){
    localStorage.setItem('admin-token',token);
  }

 getJwt(){
   const token= localStorage.getItem('admin-token');
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
    localStorage.removeItem('admin-token');
    this.router.navigateByUrl('/login/admin');
 }


  register(formData){
    return this.http.post(`${this.url}/register`,formData).toPromise();
  }

  login(formData){
    return this.http.post(`${this.url}/login`,formData).toPromise()
  }


}
