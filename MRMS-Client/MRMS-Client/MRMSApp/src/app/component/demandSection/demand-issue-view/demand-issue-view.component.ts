import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { throwError } from 'rxjs';
import { Demand } from '../../../models/demandSection/demand';
import { DemandIssue } from '../../../models/demandSection/demand-issue';

import { issueStatus } from '../../../models/shared/enum-list';
import { DemandIssueService } from '../../../services/demandSection/demand-issue.service';
import { DemandService } from '../../../services/demandSection/demand.service';
import { NotificationService } from '../../../services/Shared/notification.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-demand-issue-view',
  templateUrl: './demand-issue-view.component.html',
  styleUrls: ['./demand-issue-view.component.css']
})
export class DemandIssueViewComponent {
  demandIssue: DemandIssue[] = [];
  demand: Demand[] = [];
  dataSource: MatTableDataSource<DemandIssue> = new MatTableDataSource(this.demandIssue);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["demand", "title", "description", "status", "issueDate", "resolveDate", "actions"];

  constructor(
    private demandIssueSvc: DemandIssueService,
    private demandSvc: DemandService,
    private notificationSvc: NotificationService,
    private dialog: MatDialog
  ) { }
  getStatusName(v: number): string {
    return issueStatus[v];
  }

  confirmDelete(data: DemandIssue) {
    //console.log(data);
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      enterAnimationDuration: '800ms'
    }).afterClosed()
      .subscribe(result => {
        //console.log(result);
        if (result) {
          this.demandIssueSvc.delete(data)
            .subscribe({
              next: r => {
                this.notificationSvc.message('DemandIssue removed', 'DISMISS');
                this.dataSource.data = this.dataSource.data.filter(c => c.demandIssueId != data.demandIssueId);
              },
              error: err => {
                this.notificationSvc.message('Failed to delete data', 'DISMISS');
                throwError(() => err);
              }
            })
        }
      })
  }

  getDemandNames(id: number) {
    let c = this.demand.find(c => c.demandId == id);
    return c ? c.title : '';
  }

  getDemandName(id: number) {
    let c = this.demand.find(c => c.demandId == id);
    return c ? c.title : '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterDate(queryDate: any) {
    //const filterDate = new Date(queryDate); 
    this.dataSource.filter = queryDate.toISOString().split('T')[0];
    this.demandIssue;
  }

  ngOnInit(): void {
    this.demandSvc.get()
      .subscribe(x => {
        this.demand = x;
      }, err => {
        this.notificationSvc.message("Failed to load DemandIssue data!!!", "DISMISS");
      });

    this.demandIssueSvc.get().
      subscribe(x => {

        x.forEach(x => {
          const id = x.demandId ?? 0;
          x.title = this.getDemandName(id);
        });
        this.demandIssue = x;
        console.log(x);
        this.dataSource.data = this.demandIssue;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {
        this.notificationSvc.message("Failed to load DemandIssue data", "DISMISS");
      });
  }
}
