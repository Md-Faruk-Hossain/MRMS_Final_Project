import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalCenter } from '../../../../models/MedicalSection/medical-center';
import { MedicalCenterService } from '../../../../services/MedicalSection/medical-center.service';
import { NotificationService } from '../../../../services/Shared/notification.service';

@Component({
  selector: 'app-medical-center-edit',
  templateUrl: './medical-center-edit.component.html',
  styleUrls: ['./medical-center-edit.component.css']
})
export class MedicalCenterEditComponent {
  medicalCenter: MedicalCenter = new MedicalCenter();
  medicalCenterForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    fax: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),

  });

  f() {
    return this.medicalCenterForm.controls;
  }
  constructor(
    private medicalCenterSvc: MedicalCenterService, 
    private notificationSvc: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  update(): void {
    if (this.medicalCenterForm.invalid) return;
    console.log(this.medicalCenterForm.value);

    Object.assign(this.medicalCenter, this.medicalCenterForm.value);
    console.log(this.medicalCenter);

    this.medicalCenterSvc.update(this.medicalCenter)
      .subscribe(r => {
        this.notificationSvc.message("Data Update successfully!!!", "DISMISS");
        this.router.navigate(['/medicalCenter']);
        this.medicalCenterForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to Update data!!!", "DISMISS");
      })
  }




  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.medicalCenterSvc.getById(id)
      .subscribe(x => {
        this.medicalCenter = x;
        this.medicalCenterForm.patchValue(this.medicalCenter);
      }, err => {
        this.notificationSvc.message("Failed to load Medical Center List!!", "DISMISS");
      })
  }
}
