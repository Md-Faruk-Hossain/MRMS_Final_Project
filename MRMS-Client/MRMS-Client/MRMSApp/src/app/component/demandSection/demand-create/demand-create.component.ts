import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from '../../../models/common/company';
import { Demand } from '../../../models/demandSection/demand';
import { CompanyService } from '../../../services/common/company.service';
import { DemandService } from '../../../services/demandSection/demand.service';
import { NotificationService } from '../../../services/Shared/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demand-create',
  templateUrl: './demand-create.component.html',
  styleUrls: ['./demand-create.component.css']
})
export class DemandCreateComponent {
  demand: Demand = new Demand();
  demandForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    demandExpiryDate: new FormControl(undefined, Validators.required),
    companyId: new FormControl('', Validators.required)
  });
  company: Company[] = [];
  f() {
    return this.demandForm.controls;
  }
  constructor(
    private demandSvc: DemandService,
    private companySvc:CompanyService,
    private notificationSvc: NotificationService,
    private datePipe: DatePipe,
    private router: Router
  ) { }
  insert(): void {
    if (this.demandForm.invalid) return;
    console.log(this.demandForm.value);

    Object.assign(this.demand, this.demandForm.value);
    console.log(this.demand);

    this.demand.title = this.f()['title'].value;
    this.demand.demandExpiryDate = this.f()['demandExpiryDate'].value;
    this.demand.demandExpiryDate = new Date(<string>this.datePipe.transform(this.demand.demandExpiryDate, "yyyy-MM-dd"));
    this.demand.companyId = this.f()['companyId'].value;
    this.demandSvc.insert(this.demand)
      .subscribe(r => {
        this.notificationSvc.message("Data saved successfully!!!", "DISMISS");
        this.router.navigate(['/demand']);
        this.demandForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to save data!!!", "DISMISS");
      })
  }
  ngOnInit(): void {
    this.companySvc.get()
      .subscribe(r => {
        this.company = r;
      }, err => {
        this.notificationSvc.message("Failed to load Company", "DISMISS");
      })
  }
}
