import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms'
import { CategoryService } from 'src/app/services/category/category.service';
import { v4 as uuidv4 } from 'uuid';

import { ProductSpecsService } from '../../services/productSpecs/product-specs.service'

@Component({
  selector: 'app-adminaddproduct-specification',
  templateUrl: './adminaddproduct-specification.component.html',
  styleUrls: ['./adminaddproduct-specification.component.scss']
})
export class AdminaddproductSpecificationComponent implements OnInit {
  productSpecForm: FormGroup;

  parentCategoryId: '';
  categoryArr: any;
  categoryLevel1Arr: any;
  categoryLevelnArr: any = [];
  constructor(private fb: FormBuilder, private productSpecs: ProductSpecsService, private category: CategoryService) { }

  ngOnInit(): void {
    this.productSpecForm = this.fb.group({
      categoryId:[''],
      specifications: this.fb.array([])
    });
    this.getCategory()
    this.productSpecForm.valueChanges.subscribe(() => {
      console.log(this.productSpecForm)
    })

  }

  get specifications():FormGroup {
    return this.fb.group({
      name:[''],
      id:uuidv4(),
      contentArr: this.fb.array([this.contentArr])
    })

  }
  get contentArr(): FormGroup {
    return this.fb.group({
     name:[''],
     id:uuidv4()
    })
  }
  addSpecs() {
    (this.productSpecForm.get('specifications') as FormArray).push(this.specifications)
  }
  addContent(obj) {
    console.log(obj)

    obj.get('contentArr').push(this.contentArr)
    // ((this.productSpecForm.get('specifications') as FormArray)
    //     .at(i).get('contentArr') as FormArray)
    //     .patchValue(obj);

  }











  async getCategory() {
    const res: any = await this.category.getCategories()
    this.categoryArr = res.data
    this.categoryLevel1Arr = this.categoryArr.filter(el => el.level == 1)
  }

  setSecondaryArr(val, i = null) {
    if (val != ''){
      this.parentCategoryId = val;
      this.productSpecForm.get('categoryId').patchValue(val)
    }
    else
      this.parentCategoryId = null
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




  
  async handleSubmit() {
    const res: any = await this.productSpecs.add(this.productSpecForm.value);
    alert(res.message);
    this.ngOnInit()
  }


  removeContent(i,j){
    ((this.productSpecForm.get('specifications') as FormArray).at(i).get('contentArr') as FormArray).removeAt(j) 
  }

  removeProdSpces(i){
    (this.productSpecForm.get('specifications') as FormArray).removeAt(i)
  }

}


