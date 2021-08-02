import { Component, OnInit } from '@angular/core';
import { CommissionService } from 'src/app/services/commission/commission.service'

@Component({
  selector: 'app-admin-set-commission',
  templateUrl: './admin-set-commission.component.html',
  styleUrls: ['./admin-set-commission.component.scss']
})
export class AdminSetCommissionComponent implements OnInit {

  commissionVal=5;

  constructor(private commission:CommissionService) { }

  ngOnInit(): void {
    this.getCommission();
  }

  async setCommission(){
    const res:any = await this.commission.setCommission(this.commissionVal);
    alert(res.message)
    if(res.success)
      this.getCommission()

  }

  async getCommission(){
    const res:any = await this.commission.getCommission();
    if(res.success)
      this.commissionVal = res.data.value
  }

}
