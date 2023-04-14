import { CountryService } from './../../../services/common/country.service';
import { Country } from './../../../models/common/country';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from '../../../models/common/company';
import { CompanyService } from '../../../services/common/company.service';
import { NotificationService } from '../../../services/Shared/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent {
  company: Company = new Company();
  companyForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', null),
    countryId: new FormControl('', Validators.required)
  });
  country: Country[] = [];
  f() {
    return this.companyForm.controls;
  }
  constructor(
    private countrySvc: CountryService,
    private companySvc:CompanyService,
    private notificationSvc: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  update(): void {
    if (this.companyForm.invalid) return;
    console.log(this.companyForm.value);

    Object.assign(this.company, this.companyForm.value);
    console.log(this.company);

    this.companySvc.update(this.company)
      .subscribe(r => {
        this.notificationSvc.message("Data saved successfully!!!", "DISMISS");
        this.router.navigate(['/company']);
        this.companyForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to save data!!!", "DISMISS");
      })
  }
  ngOnInit(): void {

      this.countrySvc.get()
      .subscribe(r => {
        this.country = r;
      }, err => {
        this.notificationSvc.message("Failed to load Country data", "DISMISS");
      })

    let id: number = this.activatedRoute.snapshot.params['id'];
    this.companySvc.getById(id)
      .subscribe(x => {
        this.company = x;
        this.companyForm.patchValue(this.company);
      }, err => {
        this.notificationSvc.message("Failed to load Company data!!", "DISMISS");
      })


  }
}
