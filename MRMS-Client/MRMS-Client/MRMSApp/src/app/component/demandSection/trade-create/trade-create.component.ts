import { TradeService } from './../../../services/demandSection/trade.service';
import { Trade } from './../../../models/demandSection/trade';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Demand } from '../../../models/demandSection/demand';
import { DemandService } from '../../../services/demandSection/demand.service';
import { NotificationService } from '../../../services/Shared/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trade-create',
  templateUrl: './trade-create.component.html',
  styleUrls: ['./trade-create.component.css']
})
export class TradeCreateComponent {

  trade: Trade = new Trade();
  tradeForm: FormGroup = new FormGroup({
    jobTitle: new FormControl('', Validators.required),
    maleQuota: new FormControl('', null),
    femaleQuota: new FormControl('', null),
    age: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    workingHours: new FormControl('', Validators.required),
    overTime: new FormControl('', null),
    food: new FormControl('', Validators.required),
    accomodation: new FormControl('', Validators.required),
    contractPeriod: new FormControl('', Validators.required),
    demandId: new FormControl('', Validators.required)
  });
  demand: Demand[] = [];
  get f() {
    return this.tradeForm.controls;
  }

  constructor(
    private tradeSvc: TradeService,
    private demandSvc: DemandService,
    private notificationSvc: NotificationService,
    private router: Router
  ){}

    ngOnInit(): void {
      this.tradeForm.controls['food'].setValue("Personal");
      this.tradeForm.controls['accomodation'].setValue("Personal");
    this.demandSvc.get()
      .subscribe(r => {
        this.demand = r;
      }, err => {
        this.notificationSvc.message("Failed to load Demands", "DISMISS");
      })
  }

    insert(): void {
    if (this.tradeForm.invalid) return;
    console.log(this.tradeForm.value);

    Object.assign(this.trade, this.tradeForm.value);
    console.log(this.trade);

    this.tradeSvc.insert(this.trade)
      .subscribe(r => {
        this.notificationSvc.message("Data saved successfully!!!", "DISMISS");
        this.router.navigate(['/trade']);
        this.tradeForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to save data!!!", "DISMISS");
      })
  }

}
