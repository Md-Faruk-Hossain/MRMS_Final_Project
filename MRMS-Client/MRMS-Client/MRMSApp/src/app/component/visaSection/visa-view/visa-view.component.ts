import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { throwError } from 'rxjs';
import { Applicant } from '../../../models/ApplicantSection/applicant';
import { Visa } from '../../../models/visaSection/visa';
import { ApplicantService } from '../../../services/ApplicantSection/applicant.service';
import { NotificationService } from '../../../services/Shared/notification.service';
import { VisaService } from '../../../services/VisaSection/visa.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-visa-view',
  templateUrl: './visa-view.component.html',
  styleUrls: ['./visa-view.component.css']
})
export class VisaViewComponent {
  visa: Visa[] = [];
  applicant: Applicant[] = [];
  dataSource: MatTableDataSource<Visa> = new MatTableDataSource(this.visa);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["applicantId","visaNumber", "refNumber",  "issueDate","expiryDate", "actions"];



  constructor(
    private visaSvc: VisaService,
    private applicantSvc: ApplicantService,
    private notificationSvc: NotificationService,
    private dialog: MatDialog
  ) { }
  confirmDelete(data: Visa) {
    //console.log(data);
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      enterAnimationDuration: '800ms'
    }).afterClosed()
      .subscribe(result => {
        //console.log(result);
        if (result) {
          this.visaSvc.delete(data)
            .subscribe({
              next: r => {
                this.notificationSvc.message('Visa removed', 'DISMISS');
                this.dataSource.data = this.dataSource.data.filter(c => c.visaId != data.visaId);
              },
              error: err => {
                this.notificationSvc.message('Failed to delete data', 'DISMISS');
                throwError(() => err);
              }
            })
        }
      })
  }

  getApplicantNames(id: number) {
    let a = this.applicant.find(a => a.applicantId == id);
    return a ? a.name : '';
  }

  getApplicantName(id: number) {
    let a = this.applicant.find(a => a.applicantId == id);
    return a ? a.name : '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterDate(queryDate: any) {
    //getTimezoneOffset() method to get the difference between the timezone of the computer and UTC time, in minutes
    var offset = queryDate.getTimezoneOffset() * 60 * 1000;
    var utcDate = new Date(queryDate.getTime() - offset);
    var data = utcDate.toISOString().split('T')[0];
    this.dataSource.filter = data;
    this.visa;
  }

  ngOnInit(): void {
    this.applicantSvc.get()
      .subscribe(x => {
        this.applicant = x;
      }, err => {
        this.notificationSvc.message("Failed to load Applicant data!!!", "DISMISS");
      });

    this.visaSvc.get().
      subscribe(x => {

        x.forEach(x => {
          const id = x.applicantId ?? 0;
          x.name = this.getApplicantName(id);
        });
        this.visa = x;
        console.log(x);
        this.dataSource.data = this.visa;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {
        this.notificationSvc.message("Failed to load Visa data", "DISMISS");
      });
  }

}
