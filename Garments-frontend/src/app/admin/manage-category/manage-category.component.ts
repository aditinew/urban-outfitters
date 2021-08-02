import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent implements OnInit {

  categoryArr

  constructor(private categories: CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  async getCategories() {
    const res: any = await this.categories.getCategories();
    this.categoryArr = res.data;
  }

  async deleteCategory(id) {
    const res: any = await this.categories.deleteCategory(id);
    this.ngOnInit();
  }
}
