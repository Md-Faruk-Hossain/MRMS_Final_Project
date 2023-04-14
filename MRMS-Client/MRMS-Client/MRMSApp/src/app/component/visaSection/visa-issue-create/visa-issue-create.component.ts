import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { issueStatus } from '../../../models/shared/enum-list';
import { Visa } from '../../../models/visaSection/visa';
import { VisaIssue } from '../../../models/visaSection/visa-issue';
import { NotificationService } from '../../../services/Shared/notification.service';
import { VisaIssueService } from '../../../services/VisaSection/visa-issue.service';
import { VisaService } from '../../../services/VisaSection/visa.service';

@Component({
  selector: 'app-visa-issue-create',
  templateUrl: './visa-issue-create.component.html',
  styleUrls: ['./visa-issue-create.component.css']
})
export class VisaIssueCreateComponent {
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
    private router: Router
  ) { }



  insert(): void {
    if (this.visaIssueForm.invalid) return;
    //console.log(this.demandIssueForm.value);

    Object.assign(this.visaIssue, this.visaIssueForm.value);


    this.visaIssueSvc.insert(this.visaIssue)
      .subscribe(r => {
        this.notificationSvc.message("Data saved successfully!!!", "DISMISS");

        this.visaIssueForm.reset({});
        this.router.navigate(['/visaIssue']);
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to save data!!!", "DISMISS");
      })
  }
  ngOnInit(): void {
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
