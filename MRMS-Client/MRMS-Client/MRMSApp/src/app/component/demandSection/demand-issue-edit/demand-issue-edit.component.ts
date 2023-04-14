import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Demand } from '../../../models/demandSection/demand';
import { DemandIssue } from '../../../models/demandSection/demand-issue';
import { issueStatus } from '../../../models/shared/enum-list';
import { DemandIssueService } from '../../../services/demandSection/demand-issue.service';
import { DemandService } from '../../../services/demandSection/demand.service';
import { NotificationService } from '../../../services/Shared/notification.service';

@Component({
  selector: 'app-demand-issue-edit',
  templateUrl: './demand-issue-edit.component.html',
  styleUrls: ['./demand-issue-edit.component.css']
})
export class DemandIssueEditComponent {
  demandIssue: DemandIssue = new DemandIssue();
  demandIssueForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    demandId: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('undefined', Validators.required),
    issueDate: new FormControl(undefined, Validators.required),
    resolveDate: new FormControl(undefined, Validators.required),
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
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private router: Router
  ) { }
  update(): void {
    if (this.demandIssueForm.invalid) return;
    console.log(this.demandIssueForm.value);

    Object.assign(this.demandIssue, this.demandIssueForm.value);
    console.log(this.demandIssue);

    this.demandIssueSvc.update(this.demandIssue)
      .subscribe(r => {
        this.notificationSvc.message("Data Update successfully!!!", "DISMISS");
        this.router.navigate(['/demandIssue']);
        this.demandIssueForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to Update data!!!", "DISMISS");
      })
  }




  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.demandIssueSvc.getById(id)
      .subscribe(x => {
        this.demandIssue = x;
        this.demandIssueForm.patchValue(this.demandIssue);
      }, err => {
        this.notificationSvc.message("Failed to load Demand Issue List!!", "DISMISS");
      })


    this.demandSvc.get()
      .subscribe(r => {
        this.demand = r;
      }, err => {
        this.notificationSvc.message("Failed to load Demand ", "DISMISS");
      })
    Object.keys(issueStatus).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    ).forEach((v: any, i) => {
      this.IssueStatus.push({ label: v, value: <any>issueStatus[v] });
    });
  }
}
