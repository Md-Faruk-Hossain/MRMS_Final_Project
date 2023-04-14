import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Applicant } from '../../../models/ApplicantSection/applicant';
import { Visa } from '../../../models/visaSection/visa';
import { ApplicantService } from '../../../services/ApplicantSection/applicant.service';
import { NotificationService } from '../../../services/Shared/notification.service';
import { VisaService } from '../../../services/VisaSection/visa.service';

@Component({
  selector: 'app-visa-create',
  templateUrl: './visa-create.component.html',
  styleUrls: ['./visa-create.component.css']
})
export class VisaCreateComponent {
  visa: Visa = new Visa()
  visaForm: FormGroup = new FormGroup({
    visaNumber: new FormControl('', Validators.required),
    refNumber: new FormControl('', Validators.required),
    applicantId: new FormControl('', Validators.required),
    issueDate: new FormControl('', Validators.required),
    expiryDate: new FormControl('', Validators.required)
  });
  applicant: Applicant[] = [];
  f() {
    return this.visaForm.controls;
  }
  constructor(
    private visaSvc: VisaService,
    private applicantSvc: ApplicantService,
    private notificationSvc: NotificationService,
    private router: Router
  ) { }
  insert(): void {
    if (this.visaForm.invalid) return;
    console.log(this.visaForm.value);

    Object.assign(this.visa, this.visaForm.value);
    console.log(this.visa);

    this.visaSvc.insert(this.visa)
      .subscribe(r => {
        this.notificationSvc.message("Data saved successfully!!!", "DISMISS");
        this.router.navigate(['/visa']);
        this.visaForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to save data!!!", "DISMISS");
      })
  }
  ngOnInit(): void {
    this.applicantSvc.get()
      .subscribe(r => {
        this.applicant = r;
      }, err => {
        this.notificationSvc.message("Failed to load Applicatn", "DISMISS");
      })
  }
}
