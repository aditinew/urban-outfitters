import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-indextabmenswear',
  templateUrl: './indextabmenswear.component.html',
  styleUrls: ['./indextabmenswear.component.scss']
})
export class IndextabmenswearComponent implements OnInit {
  @Input() obj
  categoryArr=[]
  constructor(private router:Router,private route:ActivatedRoute,private category:CategoryService) {
    console.log(this.obj)    
   }

  ngOnInit(): void {
    this.getCategory();
  }
  async getCategory(){
    // const res:any=await this.category.getByName(this.name)
    // this.categoryArr=res.data
  }

}
