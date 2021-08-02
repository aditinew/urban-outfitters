import { Component, OnInit } from '@angular/core';
import { RetailerService } from 'src/app/services/retailer/retailer.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-retailer-documents',
  templateUrl: './retailer-documents.component.html',
  styleUrls: ['./retailer-documents.component.scss']
})
export class RetailerDocumentsComponent implements OnInit {
 file: any;
  docName:any="";
  sellerObj:any={};

  constructor( private retailer: RetailerService) { }

  ngOnInit(): void {
    this.getSellerData();
  }

  setFile(event) {
    this.file = event.target.files[0];
    console.log(this.file)
  }

  async getSellerData(){
    const res:any  = await this.retailer.getUserById(this.retailer.getJwt()._id);
    if(res.success)
      this.sellerObj = res.data
    else
      alert(res.message)
  }

  async uploadFile() {
    if (this.file) {

      let form_data = new FormData();
      form_data.append('docName', this.docName);
      form_data.append('file', this.file);
      const res: any = await this.retailer.uploadDocs(form_data, this.retailer.getJwt()._id);
      if (res.success) {

        Swal.fire({
          icon: 'success',
          title: `${res.message}`,
        })
      }
      window.location.reload();
    }
    else {
      Swal.fire({
        icon: 'error',
        title: `Please upload document`,
      })
    }
  }
}
