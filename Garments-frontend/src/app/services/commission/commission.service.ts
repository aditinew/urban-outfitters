import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommissionService {

    constructor(private serverUrl: UrlService, private http: HttpClient) { }
    url = `${this.serverUrl.url}/commission`

    getCommission() {
      return this.http.get(`${this.url}/`).toPromise();
    }

    setCommission(val) {
      return this.http.post(`${this.url}/`,{commissionVal:val}).toPromise();
    }

}
