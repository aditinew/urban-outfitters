import { Component, OnInit } from '@angular/core';
import { FilterCategoryService } from 'src/app/services/filterCategory/filter-category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
    selector: 'app-indexproductvarietydatail',
    templateUrl: './indexproductvarietydatail.component.html',
    styleUrls: ['./indexproductvarietydatail.component.scss']
})
export class IndexproductvarietydatailComponent implements OnInit {

    brandArr: Array<any> = [];
    brandFilterArray: Array<any> = [];
    filterArr: any = []
    productArr: any = []
    productMainArr: any = []
    categoryObj: any;
    categoryId: String | null;
    currentFilters: Array<any> = [];

    priceFilterVal: any = 0;

    searchTerm: any;


    constructor(private product: ProductService, private filterCoditions: FilterCategoryService, private router: Router, private route: ActivatedRoute, private category: CategoryService, private brand: BrandService) { }


    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) { // stackoverflow link : https://stackoverflow.com/questions/59354031/how-to-run-a-function-when-a-route-changes-in-angular
                this.getProducts()
            }
        })

        this.getProducts()
        this.getConditions();
        this.getAllBrands();
    }

    async getProducts() {

        this.categoryId = this.route.snapshot.params['id'];
        this.searchTerm = this.route.snapshot.params['search']
        if (this.searchTerm) {
            const res: any = await this.product.searchProduct(this.searchTerm);
            this.productArr = res.data
            this.productMainArr = res.data
        }
        else {



            if (this.categoryId) {
                const res: any = await this.product.getProductsByCategoryId(this.categoryId)
                this.productArr = res.data
                this.productMainArr = res.data
                const res2: any = await this.category.getById(this.categoryId);
                this.categoryObj = res2.data;
            }
            else {
                this.categoryObj = {};
                const res: any = await this.product.getAllProducts();
                this.productArr = res.data
                this.productMainArr = res.data

            }
        }

    }

    async getConditions() {
        let tempArr = []
        let temp2Arr = []
        const res: any = await this.filterCoditions.getCategories();
        tempArr = res.data;
        temp2Arr = res.data;

        ////////////////////filter array for level 0
        tempArr = tempArr.filter(el => el.level == 0);
        temp2Arr = temp2Arr.filter(el => el.level == 1);
        // console.log(tempArr),
        // console.log(temp2Arr)
        tempArr.forEach(el => {
            let arr = [];
            el.subConditionArr.forEach(ele => {
                temp2Arr.forEach(element => {
                    if (ele == element._id) {
                        if (!arr.includes(el => el._id == element._id))
                            arr.push({ ...element, selected: false })
                    }
                })
            });
            let obj = {
                _id: el._id,
                name: el.name,
                subFilters: arr,
                childSelected: false
            }
            this.filterArr.push(obj)
        })
        // console.log(this.filterArr)
    }

    async getAllBrands() {
        const res: any = await this.brand.getAll();
        if (res.success)
            this.brandArr = res.data.map(el => {
                el.selected = false
                return el
            })



    }

    addToBrandFilterArray(id, index) {

        this.brandArr[index].selected = !this.brandArr[index].selected

        if (this.brandArr[index].selected) {
            this.brandFilterArray.push({ _id: id })
        }
        else {
            this.brandFilterArray = this.brandFilterArray.filter(el => el._id != id)
        }

        this.calculateProductsAfterFiltering();

    }


    clearBrandFilterArr() {
        this.brandArr = this.brandArr.map(el => { el.selected = false; return el })
        this.brandFilterArray = [];
        this.calculateProductsAfterFiltering()
    }

    filterProducts(parentFilterObj, filterObj) {
        let tempObj = this.currentFilters.find(el => el.parentId == parentFilterObj._id)
        if (tempObj) {
            tempObj._id = filterObj._id
        }
        else {
            let obj = {
                parentId: parentFilterObj._id,
                _id: filterObj._id
            }
            this.currentFilters.push(obj)
        }

        this.calculateProductsAfterFiltering()

    }

    clearFilter(id) {
        this.currentFilters = this.currentFilters.filter(el => el.parentId != id)
        this.calculateProductsAfterFiltering()


    }


    calculateProductsAfterFiltering() {
        // fitlerArr for clearig filters

        this.filterArr.forEach(el => {
            let check = this.currentFilters.some(ele => ele.parentId == el._id)
            el.childSelected = check
            el.subFilters.forEach(ele => {
                ele.selected = this.currentFilters.some(elem => elem._id == ele._id)
            });
        });



        // prodcuts arr
        this.productArr = []
        this.productMainArr.forEach(el => {
            let chk = true
            this.currentFilters.forEach(ele => {
                let tempChk = el.filterIdArr.some(elem => elem.id == ele._id)
                if (tempChk == false)
                    chk = false
            })


            if (chk) {
                this.productArr.push(el)
                // console.log(this.productArr)
            }
        });

        //price filtering
        switch (this.priceFilterVal) {
            case 1:
                this.productArr = this.productArr.filter(el => el.mrp <= 500)
                break;
            case 2:
                this.productArr = this.productArr.filter(el => (el.mrp >= 500) && (el.mrp <= 1000))
                break;
            case 3:
                this.productArr = this.productArr.filter(el => (el.mrp >= 1000) && (el.mrp <= 1500))
                break;
            case 4:
                this.productArr = this.productArr.filter(el => (el.mrp >= 1500) && (el.mrp <= 2000))
                break;
            case 5:
                this.productArr = this.productArr.filter(el => el.mrp >= 2000)
                break;
            default:
                this.priceFilterVal = 0 //reset
        }

        // brand filtering
        if (this.brandFilterArray.length > 0)
            this.productArr = this.productArr.filter(el => this.brandFilterArray.some(ele => ele._id == el.brandId))

        return this.productArr
    }

    clearFilterByPrice() {
        this.priceFilterVal = 0;
        this.calculateProductsAfterFiltering();

    }


    filterByPrice(val) { // val 
        this.priceFilterVal = val
        this.calculateProductsAfterFiltering();
    }





}
