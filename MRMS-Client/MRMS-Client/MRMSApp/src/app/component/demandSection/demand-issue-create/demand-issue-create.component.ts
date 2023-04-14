import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Demand } from '../../../models/demandSection/demand';
import { DemandIssue } from '../../../models/demandSection/demand-issue';
import { issueStatus } from '../../../models/shared/enum-list';
import { DemandIssueService } from '../../../services/demandSection/demand-issue.service';
import { DemandService } from '../../../services/demandSection/demand.service';
import { NotificationService } from '../../../services/Shared/notification.service';

@Component({
  selector: 'app-demand-issue-create',
  templateUrl: './demand-issue-create.component.html',
  styleUrls: ['./demand-issue-create.component.css']
})
export class DemandIssueCreateComponent {
  demandIssue: DemandIssue = new DemandIssue();
  demandIssueForm: FormGroup = new FormGroup({
    demandId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    issueDate: new FormControl('', Validators.required),
    resolveDate: new FormControl('', Validators.required),

  });

  demand: Demand[] = [];
  
  f() {
    return this.demandIssueForm.controls;
  }
  IssueStatus: { label: string, value: number }[] = [];
  constructor(
    private demandIssueSvc: DemandIssueService,
    private demandSvc: DemandService,
    private notificationSvc: NotificationService,
    private datePipe: DatePipe,
    private router: Router
  ) { }



  insert(): void {
    if (this.demandIssueForm.invalid) return;
    //console.log(this.demandIssueForm.value);

    Object.assign(this.demandIssue, this.demandIssueForm.value);
    

    this.demandIssueSvc.insert(this.demandIssue)
      .subscribe(r => {
        this.notificationSvc.message("Data saved successfully!!!", "DISMISS");
        
        this.demandIssueForm.reset({});
        this.router.navigate(['/demandIssue']);
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to save data!!!", "DISMISS");
      })
  }
  ngOnInit(): void {
    this.demandSvc.get()
      .subscribe(r => {
        this.demand = r;
      }, err => {
        this.notificationSvc.message("Failed to load Demand", "DISMISS");
      })
    Object.keys(issueStatus).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    ).forEach((v: any, i) => {
      this.IssueStatus.push({ label: v, value: <any>issueStatus[v] });
    });
   
  }



}
