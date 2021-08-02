import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { WholesalerService } from '../../services/wholesaler/wholesaler.service';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss']
})
export class ProductManageComponent implements OnInit {
  productArr: any;
  modalProductObj: any;

  fileObj: any;
  modalImageId;

  constructor(private product: ProductService, private seller: WholesalerService) { }

  ngOnInit(): void {
    this.getAllproducts()
  }

  setModalId(id) {
    this.modalImageId = id;
  }

  setImage(event) {
    this.fileObj = event.target.files[0]
  }

  async addImage() {
    let form_data = new FormData();
    form_data.append('file', this.fileObj)
    const response: any = await this.product.updateImage(form_data, this.modalImageId);
    this.ngOnInit()
    alert(response.message)
  }

  async getAllproducts() {
    const res: any = await this.product.getProductsBySellerId(this.seller.getJwt()._id);
    console.log(res.data);
    this.productArr = res.data;
  }


  async deleteProduct(id) {
    const res: any = await this.product.deleteProduct(id);
    this.ngOnInit()
  }

  async getProductByIdForModal(id) {
    const res: any = await this.product.getProductById(id)
    console.log(res.data)
    if (res.success)
      this.modalProductObj = res.data;
    else
      alert(res.message)
  }



  // async updateProduct() {
  //   const res:any =await this.product.updateProduct()
  // }

  // async updateProduct(){

  // }
}
