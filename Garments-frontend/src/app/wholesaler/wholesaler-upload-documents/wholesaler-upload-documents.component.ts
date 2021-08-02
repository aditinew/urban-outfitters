import { Component, OnInit } from '@angular/core';
import { WholesalerService } from 'src/app/services/wholesaler/wholesaler.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-wholesaler-upload-documents',
  templateUrl: './wholesaler-upload-documents.component.html',
  styleUrls: ['./wholesaler-upload-documents.component.scss']
})
export class WholesalerUploadDocumentsComponent implements OnInit {
 file: any;
  docName:any="";
  sellerObj:any={};

  constructor( private seller: WholesalerService) { }

  ngOnInit(): void {
    this.getSellerData();
  }

  setFile(event) {
    this.file = event.target.files[0];
    console.log(this.file)
  }

  async getSellerData(){
    const res:any  = await this.seller.getById(this.seller.getJwt()._id);
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
      const res: any = await this.seller.uploadDocs(form_data, this.seller.getJwt()._id);
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
