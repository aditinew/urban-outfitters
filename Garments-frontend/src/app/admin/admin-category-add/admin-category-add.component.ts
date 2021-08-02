import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service'

@Component({
    selector: 'app-admin-category-add',
    templateUrl: './admin-category-add.component.html',
    styleUrls: ['./admin-category-add.component.scss']
})
export class AdminCategoryAddComponent implements OnInit {

    constructor(private category: CategoryService) { }

    imageBool: Boolean = false;

    categoryArr: any;
    categoryLevel1Arr: any;
    categoryLevelnArr: any = [];

    parentId: any = "";
    name: any;
    file: any;
    staticFile = '../../assets/GARMENTS_WHITE_b.png';
    ngOnInit(): void {
        this.getCategory();
        this.parentId = '';
        this.imageBool = false;
        this.file = undefined;
        this.name = '';
        this.categoryLevelnArr = []
    }


    async getCategory() {
        const res: any = await this.category.getCategories()
        this.categoryArr = res.data
        this.categoryLevel1Arr = this.categoryArr.filter(el => el.level == 1)
    }

    async addCategory() {

        let obj = {
            parentId: this.parentId,
            name: this.name
        }


        // form_data.append('parentId',this.parentId);
        // form_data.append('name',this.name)
        const res: any = await this.category.addCategory(obj);
        if (res.success) {
            if (this.file) {

                let form_data = new FormData();
                form_data.append('file', this.file);
                const response: any = await this.category.updateImage(form_data, res.data);
                alert(response.message)
            }
            else {
                alert(res.message)
            }
            window.location.reload()
        }

        this.ngOnInit();
    }
    setImage(event) {
        this.file = event.target.files[0]

    }
    setSecondaryArr(val, i = null) {
        if (val != '')
            this.parentId = val;
        else
            this.ngOnInit()
        if (i == null) {
            this.imageBool = true


            console.log(val)
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

}
