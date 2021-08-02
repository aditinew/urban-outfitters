import { Component, OnInit } from '@angular/core';
import { FilterCategoryService } from '../../services/filterCategory/filter-category.service'
import { CategoryService } from '../../services/category/category.service'

@Component({
    selector: 'app-adminaddfilters',
    templateUrl: './adminaddfilters.component.html',
    styleUrls: ['./adminaddfilters.component.scss']
})
export class AdminaddfiltersComponent implements OnInit {
    filterArr: any;
    filterLevel1Arr: any;
    filterLevelnArr: any = [];

    parentFilterId: any
    name: any


    // categoryArr: any;
    // categoryLevel1Arr: any;
    // categoryLevelnArr: any = [];

    // parentCategoriesId: any = "";





    ngOnInit(): void {
        this.getFilter();
        // this.getCategory();

        this.name = '';
        this.filterLevelnArr = []
        // this.categoryLevelnArr = []
    }

    constructor(private filter: FilterCategoryService, private category: CategoryService) { }

    resetFilters() {
        this.getFilter();
        this.parentFilterId = '';
        this.filterLevelnArr = []
        this.parentFilterId = ''

    }

    // resetCategories() {

    //     this.getCategory();
    //     this.categoryLevelnArr = []
    // }


    async getFilter() {
        const res: any = await this.filter.getCategories()
        this.filterArr = res.data
        this.filterLevel1Arr = this.filterArr.filter(el => el.level == 0)
    }
    // async getCategory() {
    //     const res: any = await this.category.getCategories()
    //     this.categoryArr = res.data
    //     this.categoryLevel1Arr = this.categoryArr.filter(el => el.level == 1)
    // }


    async addFilter() {

        let obj = {
            parentId: this.parentFilterId,
            name: this.name,
            // categoryId: this.parentCategoriesId,
        }
        // if (this.parentCategoriesId) {

        const res: any = await this.filter.addCategory(obj);
        alert(res.message)

        this.ngOnInit();
        // }
        // else {
        //     alert('Select a category first')
        // }
    }


    setSecondaryFilterArr(val, i = null) {
        if (val != '')
            this.parentFilterId = val;
        else {
            this.resetFilters()
        }
        if (i == null) {



            console.log(val)
            let tempObj = this.filterArr.find(el => el._id == val)
            let tempArr = [];
            tempObj.subConditionArr.forEach(element => {
                let tempEl = this.filterArr.find(ele => ele._id == element);
                tempArr.push(tempEl)
            });
            this.filterLevelnArr = [tempArr];
        }
        else {
            let tempObj = this.filterArr.find(el => el._id == val)
            let tempArr = [];
            tempObj.subConditionArr.forEach(element => {
                let tempEl = this.filterArr.find(ele => ele._id == element);
                tempArr.push(tempEl)
            });
            if (this.filterLevelnArr.length - 1 == i) {
                this.filterLevelnArr.push(tempArr)
            }
            else {
                this.filterLevelnArr.slice(0, i + 1);
                this.filterLevelnArr.push(tempArr)

            }
        }

    }




    // setSecondaryArr(val, i = null) {
    //     if (val != '')
    //         this.parentCategoriesId = val;
    //     else
    //         this.parentCategoriesId = null
    //     if (i == null) {



    //         console.log(val)
    //         let tempObj = this.categoryArr.find(el => el._id == val)
    //         let tempArr = [];
    //         tempObj.subCategoryArr.forEach(element => {
    //             let tempEl = this.categoryArr.find(ele => ele._id == element);
    //             tempArr.push(tempEl)
    //         });
    //         this.categoryLevelnArr = [tempArr];
    //     }
    //     else {
    //         let tempObj = this.categoryArr.find(el => el._id == val)
    //         let tempArr = [];
    //         tempObj.subCategoryArr.forEach(element => {
    //             let tempEl = this.categoryArr.find(ele => ele._id == element);
    //             tempArr.push(tempEl)
    //         });
    //         if (this.categoryLevelnArr.length - 1 == i) {
    //             this.categoryLevelnArr.push(tempArr)
    //         }
    //         else {
    //             this.categoryLevelnArr.slice(0, i + 1);
    //             this.categoryLevelnArr.push(tempArr)

    //         }
    //     }

    // }
}
