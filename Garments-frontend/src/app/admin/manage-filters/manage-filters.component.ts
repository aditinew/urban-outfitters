import { Component, OnInit } from '@angular/core';
import { FilterCategoryService } from '../../services/filterCategory/filter-category.service';

@Component({
  selector: 'app-manage-filters',
  templateUrl: './manage-filters.component.html',
  styleUrls: ['./manage-filters.component.scss']
})
export class ManageFiltersComponent implements OnInit {
  filterCategoryArr: any;

  constructor(private filter: FilterCategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  async getCategories() {
    const res: any = await this.filter.getCategories()
    console.log(res.data)
    this.filterCategoryArr = res.data;
  }

  async deleteFilter(id) {
    const res: any = await this.filter.deleteCategory(id);
    this.ngOnInit();
  }
}
