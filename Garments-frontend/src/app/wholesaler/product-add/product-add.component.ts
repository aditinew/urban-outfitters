import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { FilterCategoryService } from '../../services/filterCategory/filter-category.service';

import { WholesalerService } from 'src/app/services/wholesaler/wholesaler.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ProductSpecsService } from '../../services/productSpecs/product-specs.service';
import { ProductService } from '../../services/product/product.service';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  brandsArr: Array<any> = [];
  brandId: any;
  stock: any = 0;

  sampleCost: any;

  categoryArr: any;
  categoryLevel1Arr: any;
  categoryLevelnArr: any = [];
  categoryIdArr: any = [];

  filterArr: any;
  filterDisplayArr: any = [];
  filterLevelnArr: any = [];
  productFilterArr: any = []

  productSpecObj: any;
  productSpecFinalArr: any = [];
  variantPriceArr: any = [];

  filterFinalArr: any = []
  minQuantity: any;
  productSpecsDataArr: any | Array<any> = [];


  parentCategoryId: ''
  parentFilterId: any
  htmlContent: any;
  codChk = false;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  name: any;
  subHeading: any;
  mrp: any;
  cutMrp: any;
  file: any;
  setItemQuantity: any;
  constructor(private wholesaler: WholesalerService, private productSpecs: ProductSpecsService, private category: CategoryService, private filter: FilterCategoryService, private product: ProductService, private brand: BrandService) { }

  ngOnInit(): void {
    this.getCategory();
    this.getFilter();
    this.getBrands();
  }

  setCod() {
    this.codChk = !this.codChk
  }
  async getCategory() {
    const res: any = await this.category.getCategories()
    this.categoryArr = res.data
    this.categoryLevel1Arr = this.categoryArr.filter(el => el.level == 1)
  }

  async getFilter() {
    const res: any = await this.filter.getCategories()
    this.filterArr = res.data;
    console.log(res.data)
    this.filterDisplayArr = this.filterArr.filter(el => el.level == 0);
    this.filterDisplayArr.forEach(el => el.checked = false)
  }

  async getProductSpecs(val) {
    console.log(val)
    const res: any = await this.productSpecs.getById(val);
    console.log(res)
    this.productSpecObj = res.data;
    if (this.productSpecObj) {
      this.productSpecObj.specifications.forEach(element => {
        element.checked = false;
        element.level = 0
      });
    }
    // this.productSpecsDisplayArr = res.data;
  }

  async getBrands() {
    const res: any = await this.brand.getAll();
    if (res.success)
      this.brandsArr = res.data

  }

  setSecondaryArr(val, i = null) {
    if (val != '') {

      this.parentCategoryId = val;
      this.getProductSpecs(val);

      if (i == null)
        this.categoryIdArr = [val]
      else
        this.categoryIdArr.push(val)

      console.log(this.categoryIdArr)

    }
    else {
      this.parentCategoryId = null
      this.categoryIdArr = [];
    }
    if (i == null) {



      let tempObj = this.categoryArr.find(el => el._id == val)
      let tempArr = [];
      tempObj.subCategoryArr.forEach(element => {
        let tempEl = this.categoryArr.find(ele => ele._id == element);
        tempArr.push(tempEl)
      });
      this.categoryLevelnArr = [tempArr];
    }
    else {
      let tempObj = this.categoryArr.find(el => el._id == val)
      let tempArr = [];
      tempObj.subCategoryArr.forEach(element => {
        let tempEl = this.categoryArr.find(ele => ele._id == element);
        tempArr.push(tempEl)
      });
      if (this.categoryLevelnArr.length - 1 == i) {
        this.categoryLevelnArr.push(tempArr)
      }
      else {
        this.categoryLevelnArr.slice(0, i + 1);
        this.categoryLevelnArr.push(tempArr)

      }
    }

  }

  addFilter(val, level, i) {

    let tempEl = this.filterArr.find(el => el._id == val);

    tempEl.checked = !tempEl.checked
    if (tempEl.checked == false) {
      let startindex = 0;
      let deleteCount = 0;
      let currentLevel = tempEl.level
      if (tempEl.subConditionArr) {
        if (tempEl.subConditionArr.length > 0) {
          startindex = i + 1
          if (this.filterDisplayArr[i + 1].level > tempEl.level) {
            for (let j = i + 1; j < this.filterDisplayArr.length; j++) {
              if (this.filterDisplayArr[j + 1]) {
                if (this.filterDisplayArr[j + 1].level > tempEl.level) {
                  deleteCount++;
                }
                else {
                  deleteCount++;
                  break;
                }
              }
              else {
                deleteCount++;
              }
            }
          }
        }
      }
      this.filterDisplayArr.splice(startindex, deleteCount);

      this.productFilterArr = []
      this.filterDisplayArr.forEach(elx => {

        if (elx.checked)
          this.productFilterArr.push({ id: elx._id, level: elx.level });

      });
    }
    else {

      this.productFilterArr.push({ id: val, level });

      let tempArr = []
      if (tempEl) {
        tempArr = this.filterArr.filter(el => {
          let tempVal = false
          tempEl.subConditionArr.forEach(ele => {
            if (ele == el._id) {
              tempVal = true
            }
          })
          return tempVal
        })
        tempArr.forEach(elxx => {
          elxx.checked = false
        })
        this.filterDisplayArr.splice(i + 1, 0, ...tempArr)

        // let obj={
        //     parentId:
        // }
      }

    }
    if (tempEl.level == 1) {
      if (tempEl.checked) {
        let obj = {
          parentId: tempEl.parentConditionArr[0].id,
          id: tempEl._id
        }
        this.filterFinalArr.push(obj)
      }
      else {
        this.filterFinalArr = this.filterFinalArr.filter(el => el.id != tempEl._id)
      }
    }
    console.log(this.filterFinalArr)


  }



  addProductSpec(val, index) {
    console.log(val)
    this.productSpecObj.specifications[index].checked = !this.productSpecObj.specifications[index].checked
    if (!(this.productSpecFinalArr.some(el => el._id == val.id))) {
      let obj = {
        _id: val.id,
        contentArr: []
      }
      this.productSpecFinalArr.push(obj);
      console.log(this.productSpecFinalArr)
    }
    else {
      this.productSpecFinalArr.splice(index, 1)
      console.log(this.productSpecFinalArr)
    }
  }

  addPro(id, parentId, index) {

    let parentIndex = this.productSpecFinalArr.findIndex(el => el._id == parentId)

    if (!(this.productSpecFinalArr[parentIndex].contentArr.some(el => el.id == id))) {
      this.productSpecFinalArr[parentIndex].contentArr.push({ id })
    }
    else {
      this.productSpecFinalArr[parentIndex].contentArr.splice(index, 1)
    }
  }

  setImage(event) {
    this.file = event.target.files[0];
  }

  async handleSubmit() {
    let obj = {
      name: this.name,
      subHeading: this.subHeading,
      mrp: this.mrp,
      cutMrp: this.cutMrp,
      categoryId: this.parentCategoryId,
      categoryIdArr: this.categoryIdArr,
      filterIdArr: this.filterFinalArr,
      productSpecificationArr: this.productSpecFinalArr,
      description: this.htmlContent,
      minQuantity: this.minQuantity,
      codChk: this.codChk,
      sellerId: this.wholesaler.getJwt()._id,
      setItemQuantity: this.setItemQuantity,
      brandId: this.brandId,
      sampleCost: this.sampleCost,
      stock: this.stock
    }
    const res: any = await this.product.add(obj);
    if (res.success) {
      let form_data = new FormData();
      form_data.append('file', this.file)
      const response: any = await this.product.updateImage(form_data, res.data);
      alert(res.message)
      if (!response.success)
        alert(response.message)
      else {
        window.location.reload();
      }
    }
    else {
      alert(res.message)
    }
  }
}
