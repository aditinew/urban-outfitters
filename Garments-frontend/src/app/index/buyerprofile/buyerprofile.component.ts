import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms'
import { RetailerService } from 'src/app/services/retailer/retailer.service';
@Component({
  selector: 'app-buyerprofile',
  templateUrl: './buyerprofile.component.html',
  styleUrls: ['./buyerprofile.component.scss']
})
export class BuyerprofileComponent implements OnInit {
  optionsBarVal = false;
  buyerObj:any;
  constructor(private retailer:RetailerService) { }




    ngOnInit(): void {
    this.getUser()
  }

  async getUser(){
    const res:any= await this.retailer.getUserById(this.retailer.getJwt()._id);
    if(res.success)
      this.buyerObj = res.data
    else
      alert(res.message)
  }

  optionsBarSetVal(numval, val) {
    this.optionsBarVal = numval;
    console.log(val)
    console.log(this.optionsBarVal);
  }

}
