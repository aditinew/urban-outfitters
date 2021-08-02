import { Component, OnInit } from '@angular/core';
import { ProductSpecsService } from '../../services/productSpecs/product-specs.service';

@Component({
  selector: 'app-manage-product-specification',
  templateUrl: './manage-product-specification.component.html',
  styleUrls: ['./manage-product-specification.component.scss']
})
export class ManageProductSpecificationComponent implements OnInit {
  productspecArr: any;


  constructor(private prodspec: ProductSpecsService) { }

  ngOnInit(): void {
    this.productspecGetAll()
  }

  async productspecGetAll() {
    const res: any = await this.prodspec.getAllSpecs();
    console.log(res);
    this.productspecArr = res.data
  }

  async deleteSpecification(id) {
    const res: any = await this.prodspec.deleteSpec(id)
  }
} 
