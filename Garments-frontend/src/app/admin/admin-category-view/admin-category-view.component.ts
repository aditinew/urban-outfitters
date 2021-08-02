import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-admin-category-view',
  templateUrl: './admin-category-view.component.html',
  styleUrls: ['./admin-category-view.component.scss']
})
export class AdminCategoryViewComponent implements OnInit {

  constructor(private category: CategoryService) { }
  categoryArr: Array<any> = []

  ngOnInit(): void {
    this.getCategory()
  }

  async getCategory() {
    const res: any = await this.category.getCategories()
    this.categoryArr = res.data;
    console.log(res)
  }

  async deleteCategory(id) {
    const res: any = await this.category.deleteCategory(id);
    alert(res.message)
    this.ngOnInit();
  }

}
