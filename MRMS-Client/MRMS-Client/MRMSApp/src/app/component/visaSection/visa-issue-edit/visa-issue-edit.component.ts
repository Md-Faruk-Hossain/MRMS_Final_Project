import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { issueStatus } from '../../../models/shared/enum-list';
import { Visa } from '../../../models/visaSection/visa';
import { VisaIssue } from '../../../models/visaSection/visa-issue';
import { NotificationService } from '../../../services/Shared/notification.service';
import { VisaIssueService } from '../../../services/VisaSection/visa-issue.service';
import { VisaService } from '../../../services/VisaSection/visa.service';

@Component({
  selector: 'app-visa-issue-edit',
  templateUrl: './visa-issue-edit.component.html',
  styleUrls: ['./visa-issue-edit.component.css']
})
export class VisaIssueEditComponent {
  visaIssue: VisaIssue = new VisaIssue();
  visaIssueForm: FormGroup = new FormGroup({
    visaId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    issueDate: new FormControl('', Validators.required),
    resolveDate: new FormControl('', Validators.required)

  });

  visa: Visa[] = [];
  f() {
    return this.visaIssueForm.controls;
  }
  IssueStatus: { label: string, value: number }[] = [];
  constructor(
    private visaIssueSvc: VisaIssueService,
    private visaSvc: VisaService,
    private notificationSvc: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
 
  ) { }

  update(): void {
    if (this.visaIssueForm.invalid) return;
    console.log(this.visaIssueForm.value);

    Object.assign(this.visaIssue, this.visaIssueForm.value);
    console.log(this.visaIssue);

    this.visaIssueSvc.update(this.visaIssue)
      .subscribe(r => {
        this.notificationSvc.message("Data Update successfully!!!", "DISMISS");
        this.router.navigate(['/visaIssue']);
        this.visaIssueForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to Update data!!!", "DISMISS");
      })
  }



  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.visaIssueSvc.getById(id)
      .subscribe(x => {
        this.visaIssue = x;
        this.visaIssueForm.patchValue(this.visaIssue);
      }, err => {
        this.notificationSvc.message("Failed to load Visa Issue List!!", "DISMISS");
      })

    this.visaSvc.get()
      .subscribe(r => {
        this.visa = r;
      }, err => {
        this.notificationSvc.message("Failed to load Visa", "DISMISS");
      })
    Object.keys(issueStatus).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    ).forEach((v: any, i) => {
      this.IssueStatus.push({ label: v, value: <any>issueStatus[v] });
    });

  }
}
