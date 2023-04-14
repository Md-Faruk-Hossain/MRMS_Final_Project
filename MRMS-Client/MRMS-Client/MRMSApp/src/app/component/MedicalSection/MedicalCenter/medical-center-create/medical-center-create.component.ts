import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalCenter } from '../../../../models/MedicalSection/medical-center';
import { MedicalCenterService } from '../../../../services/MedicalSection/medical-center.service';
import { NotificationService } from '../../../../services/Shared/notification.service';

@Component({
  selector: 'app-medical-center-create',
  templateUrl: './medical-center-create.component.html',
  styleUrls: ['./medical-center-create.component.css']
})
export class MedicalCenterCreateComponent {
  medicalCenter: MedicalCenter = new MedicalCenter();
  medicalCenterForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('',Validators.required),
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
    private router: Router
  ) { }
  insert(): void {
    if (this.medicalCenterForm.invalid) return;
    console.log(this.medicalCenterForm.value);

    Object.assign(this.medicalCenter, this.medicalCenterForm.value);
    console.log(this.medicalCenter);

    this.medicalCenter.name = this.f()['name'].value;
    this.medicalCenter.address = this.f()['address'].value;
    this.medicalCenter.phone = this.f()['phone'].value;
    this.medicalCenter.email = this.f()['email'].value;
    this.medicalCenter.fax = this.f()['fax'].value;
    this.medicalCenter.website = this.f()['website'].value;
    
    this.medicalCenterSvc.insert(this.medicalCenter)
      .subscribe(r => {
        this.notificationSvc.message("Data saved successfully!!!", "DISMISS");
        this.router.navigate(['/medicalCenter']);
        this.medicalCenterForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to save data!!!", "DISMISS");
      })
  }
  ngOnInit(): void {
 
  }
}
