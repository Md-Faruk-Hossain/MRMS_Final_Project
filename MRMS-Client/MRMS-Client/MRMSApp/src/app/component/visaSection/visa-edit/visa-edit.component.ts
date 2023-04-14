import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicant } from '../../../models/ApplicantSection/applicant';
import { Visa } from '../../../models/visaSection/visa';
import { ApplicantService } from '../../../services/ApplicantSection/applicant.service';
import { NotificationService } from '../../../services/Shared/notification.service';
import { VisaService } from '../../../services/VisaSection/visa.service';

@Component({
  selector: 'app-visa-edit',
  templateUrl: './visa-edit.component.html',
  styleUrls: ['./visa-edit.component.css']
})
export class VisaEditComponent {
  visa: Visa = new Visa()
  visaForm: FormGroup = new FormGroup({
    applicantId: new FormControl('', Validators.required),
    visaNumber: new FormControl('', Validators.required),
    refNumber: new FormControl('', Validators.required),  
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
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  
  update(): void {
   
    if (this.visaForm.invalid) return;
    console.log(this.visaForm.value);

    Object.assign(this.visa, this.visaForm.value);
    console.log(this.visa);

    this.visaSvc.update(this.visa)
      .subscribe(r => {
        this.notificationSvc.message("Data Update successfully!!!", "DISMISS");
        this.router.navigate(['/visa']);
        this.visaForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to Update data!!!", "DISMISS");
      })

  }

  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.visaSvc.getById(id)
      .subscribe(x => {
        this.visa = x;
        this.visaForm.patchValue(this.visa);
      }, err => {
        this.notificationSvc.message("Failed to load Visa  List!!", "DISMISS");
      })


    this.applicantSvc.get()
      .subscribe(r => {
        this.applicant = r;
      }, err => {
        this.notificationSvc.message("Failed to load applicant ", "DISMISS");
      })
   
  }
}
