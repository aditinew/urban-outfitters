import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { OrderStatusService } from 'src/app/services/orderStatus/order-status.service';
@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.scss']
})
export class OrderstatusComponent implements OnInit {

  orderForm:FormGroup
  constructor(private fb:FormBuilder,private orderStatus:OrderStatusService) { }

  ngOnInit(): void {
    this.orderForm=this.fb.group({
      name:['',Validators.required]
    })
  }

  async handleSubmit(){
    if(!this.orderForm.invalid){

      const res:any=await this.orderStatus.add(this.orderForm.value);
      alert(res.message)
      this.ngOnInit()
    }
    else{
      alert("Please Enter Status Name")
    }
  }

}
