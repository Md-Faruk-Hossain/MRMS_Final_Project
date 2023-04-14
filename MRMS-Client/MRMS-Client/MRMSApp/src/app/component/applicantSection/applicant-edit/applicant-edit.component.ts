import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from '../../../models/Agent/agent';
import { Applicant } from '../../../models/ApplicantSection/applicant';
import { eduction, gender, maritalStatus, religion } from '../../../models/shared/enum-list';
import { AgentService } from '../../../services/Agents/agents.service';
import { ApplicantService } from '../../../services/ApplicantSection/applicant.service';
import { NotificationService } from '../../../services/Shared/notification.service';

@Component({
  selector: 'app-applicant-edit',
  templateUrl: './applicant-edit.component.html',
  styleUrls: ['./applicant-edit.component.css']
})
export class ApplicantEditComponent {
  applicant: Applicant = new Applicant();
  file: File = null!;

  applicantForm: FormGroup = new FormGroup({
    passsportNo: new FormControl('', Validators.required),
    passportExpiry: new FormControl('', Validators.required),
    height: new FormControl('', null),
    weight: new FormControl('', null),
    jobExperience: new FormControl('', null),
    name: new FormControl('', Validators.required),
    fathersName: new FormControl('', Validators.required),
    mothersName: new FormControl('', Validators.required),
    spouse: new FormControl('', null),
    presentAddress: new FormControl('', null),
    permanentAddress: new FormControl('', null),
    dateOfBrith: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    nid: new FormControl('', Validators.required),
    birthCertificateNo: new FormControl('', null),
    picture: new FormControl('', Validators.required),
    email: new FormControl('', null),
    nationality: new FormControl('', null),
    gender: new FormControl('', Validators.required),
    religion: new FormControl('', Validators.required),
    maritalStatus: new FormControl('', Validators.required),
    education: new FormControl('', Validators.required),
    agentId: new FormControl('', Validators.required)
  });

  agent: Agent[] = [];
  statusOptions: { label: string, value: number }[] = [];
  statusOptions1: { label: string, value: number }[] = [];
  statusOptions2: { label: string, value: number }[] = [];
  statusOptions3: { label: string, value: number }[] = [];

  f() {
    return this.applicantForm.controls;
  }

  constructor(
    private applicantSvc: ApplicantService,
    private agentSvc: AgentService,
    private datePipe: DatePipe,
    private notificationSvc: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.applicantSvc.getById(id)
      .subscribe(x => {
        this.applicant = x;
        this.applicantForm.patchValue(this.applicant);
      }, err => {
        this.notificationSvc.message("Failed to load Applicant List!!", "DISMISS");
      })

    this.agentSvc.get()
      .subscribe(r => {
        this.agent = r;
      }, err => {
        this.notificationSvc.message("Failed to load Agent", "DISMISS");
      });

    Object.keys(gender).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    ).forEach((v: any, i) => {
      this.statusOptions.push({ label: v, value: <any>gender[v] });
    });

    Object.keys(maritalStatus).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    ).forEach((v: any, i) => {
      this.statusOptions1.push({ label: v, value: <any>maritalStatus[v] });
    });

    Object.keys(religion).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    ).forEach((v: any, i) => {
      this.statusOptions2.push({ label: v, value: <any>religion[v] });
    });

    Object.keys(eduction).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    ).forEach((v: any, i) => {
      this.statusOptions3.push({ label: v, value: <any>eduction[v] });
    });
  }
  handleFileInputChange(event: any): void {
    if (event.target.files.length) {
      this.file = event.target.files[0];
      this.applicantForm.controls['picture'].patchValue(this.file.name);
      console.log(this.file.name);
    }
    else {
      this.applicantForm.controls['picture'].patchValue("");
    }

  }



  update(): void {
    if (this.applicantForm.invalid) return;


    Object.assign(this.applicant, this.applicantForm.value);

    const formData = new FormData();

    for (const [key, value] of Object.entries(this.applicant)) {
      if (value !== null && value !== undefined) {
        if (value instanceof Date) {
          const formattedDate = this.datePipe.transform(value, 'yyyy-MM-dd');
          formData.append(key, formattedDate || '');
        } else {
          formData.append(key, value.toString());
        }
      }
    }
    if (this.file) {
      formData.append("pictureFile", this.file, this.file.name);
    }

    this.applicantSvc.update(formData as any)
      .subscribe(r => {
        this.notificationSvc.message("Data updated successfully!!!", "DISMISS");
        this.router.navigate(['/applicant']);
        this.applicantForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to update data!!!", "DISMISS");
      })
  }
}

