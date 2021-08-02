import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-indexlatesttrends',
  templateUrl: './indexlatesttrends.component.html',
  styleUrls: ['./indexlatesttrends.component.scss']
})
export class IndexlatesttrendsComponent implements OnInit {

  activeVal;
  constructor(private category: CategoryService) { }
  categoryArr: any = []
  categoryLevel1Arr = []
  ngOnInit(): void {
    this.getCategory();
  }

  async setCategory(obj) {
   this.getByName(obj.name)
   this.activeVal=obj.name
  }

  async getCategory() {
    const res: any = await this.category.getCategories()
    let tempArr = res.data
    this.categoryArr = tempArr.filter(el => el.level == 1);
    this.getByName(this.categoryArr[0].name);
    this.activeVal=this.categoryArr[0].name
  }
  async getByName(val) {

    const res: any = await this.category.getByName(val)
    this.categoryLevel1Arr = res.data
  }
}
