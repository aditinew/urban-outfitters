import { Component, OnInit } from '@angular/core';
import { WholesalerService } from 'src/app/services/wholesaler/wholesaler.service';
import Swal,{SweetAlertOptions} from 'sweetalert2/dist/sweetalert2.js';
import { RetailerService } from 'src/app/services/retailer/retailer.service';

@Component({
  selector: 'app-admin-verify-document',
  templateUrl: './admin-verify-document.component.html',
  styleUrls: ['./admin-verify-document.component.scss']
})
export class AdminVerifyDocumentComponent implements OnInit {

  sellerArr:Array<any>=[]
  retailerArr:Array<any>=[]
  modalObj:any
  modalObj2:any
  docMessage:any;


  constructor(private wholesaler:WholesalerService, private retailer:RetailerService) { }

  ngOnInit(): void {
    this.getVerifyDocs()
    this.getRetailerVerifyDocs()
  }

  async getVerifyDocs(){
    const res:any = await this.wholesaler.getVerifyDocs();
    if(res.success)
      this.sellerArr = res.data
    else
      alert(res.message)
  }

  async getRetailerVerifyDocs(){
    const res:any = await this.retailer.getVerifyDocs();
    if(res.success)
      this.retailerArr = res.data
    else
      alert(res.message)
  }




  setModalObj(obj)
  {
    this.modalObj=obj
  }

  async verifyDocs(val) //-1 reject , 2 for accept
  {


    const res:any = await this.wholesaler.verifyDocs({docMessage:this.docMessage, docVerificationFlag:val}, this.modalObj._id)
    alert(res.message)
    if(res.success)
      window.location.reload();
  }

  async verifyRetailerDocs(val) //-1 reject , 2 for accept
  {
    const res:any = await this.retailer.verifyDocs({docMessage:this.docMessage, docVerificationFlag:val}, this.modalObj._id)
    alert(res.message)
    if(res.success)
      window.location.reload();
  }


}
