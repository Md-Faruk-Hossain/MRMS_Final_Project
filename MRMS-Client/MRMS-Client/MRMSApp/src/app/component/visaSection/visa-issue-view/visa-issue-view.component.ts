import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { throwError } from 'rxjs';
import { issueStatus } from '../../../models/shared/enum-list';
import { Visa } from '../../../models/visaSection/visa';
import { VisaIssue } from '../../../models/visaSection/visa-issue';
import { NotificationService } from '../../../services/Shared/notification.service';
import { VisaIssueService } from '../../../services/VisaSection/visa-issue.service';
import { VisaService } from '../../../services/VisaSection/visa.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-visa-issue-view',
  templateUrl: './visa-issue-view.component.html',
  styleUrls: ['./visa-issue-view.component.css']
})
export class VisaIssueViewComponent {
  visaIssue: VisaIssue[] = [];
  visa: Visa[] = [];
  dataSource: MatTableDataSource<VisaIssue> = new MatTableDataSource(this.visaIssue);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["visa", "title", "description", "status", "issueDate", "resolveDate", "actions"];

  constructor(
    private visaIssueSvc: VisaIssueService,
    private visaSvc: VisaService,
    private notificationSvc: NotificationService,
    private dialog: MatDialog
  ) { }
  getStatusName(v: number): string {
    return issueStatus[v];
  }

  confirmDelete(data: VisaIssue) {
    //console.log(data);
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      enterAnimationDuration: '800ms'
    }).afterClosed()
      .subscribe(result => {
        //console.log(result);
        if (result) {
          this.visaIssueSvc.delete(data)
            .subscribe({
              next: r => {
                this.notificationSvc.message('VisaIssue removed', 'DISMISS');
                this.dataSource.data = this.dataSource.data.filter(c => c.visaIssueId != data.visaIssueId);
              },
              error: err => {
                this.notificationSvc.message('Failed to delete data', 'DISMISS');
                throwError(() => err);
              }
            })
        }
      })
  }

  //getVisaNames(id: number) {
  //  let v = this.visa.find(v => v.visaId == id);
  //  return v ? v.visaNumber : '';
  //}

  getVisaNames(id: number) {
    let v = this.visa.find(v => v.visaId == id);
    return v ? v.visaNumber : '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterDate(queryDate: any) {
    //const filterDate = new Date(queryDate); 
    this.dataSource.filter = queryDate.toISOString().split('T')[0];
    this.visaIssue;
  }

  ngOnInit(): void {
    this.visaSvc.get()
      .subscribe(x => {
        this.visa = x;
      }, err => {
        this.notificationSvc.message("Failed to load Visa Issue data!!!", "DISMISS");
      });

    this.visaIssueSvc.get().
      subscribe(x => {

        x.forEach(x => {
          const id = x.visaId ?? 0;
          x.visaNumber = this.getVisaNames(id);
        });
        this.visaIssue = x;
        console.log(x);
        this.dataSource.data = this.visaIssue;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {
        this.notificationSvc.message("Failed to load Visa Issue data", "DISMISS");
      });
  }
}
