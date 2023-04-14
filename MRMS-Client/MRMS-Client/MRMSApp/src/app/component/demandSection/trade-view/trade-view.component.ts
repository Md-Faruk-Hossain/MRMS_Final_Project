import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Demand } from '../../../models/demandSection/demand';
import { Trade } from '../../../models/demandSection/trade';
import { DemandService } from '../../../services/demandSection/demand.service';
import { TradeService } from '../../../services/demandSection/trade.service';
import { NotificationService } from '../../../services/Shared/notification.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-trade-view',
  templateUrl: './trade-view.component.html',
  styleUrls: ['./trade-view.component.css']
})
export class TradeViewComponent {

  trade: Trade[] = [];
  demand: Demand[] = [];
  dataSource: MatTableDataSource<Trade> = new MatTableDataSource(this.trade);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["jobTitle", "maleQuota", "femaleQuota", "age", "salary", "currency", "workingHours", "overTime", "food", "accomodation", "contractPeriod", "demand","actions"];

  constructor(
    private tradeSvc: TradeService,
    private demandSvc: DemandService,
    private notificationSvc: NotificationService,
    private dialog: MatDialog,
    private route: Router
  ) { }


  applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getDemandName(id: number) {
    let c = this.demand.find(c => c.demandId == id);
    return c ? c.title : '';
  }


  ngOnInit(): void {
    this.tradeSvc.get().
      subscribe(x => {
        this.demand = x;
        console.log(x);
        this.dataSource.data = this.demand;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {
        this.notificationSvc.message("Failed to load Trade data", "DISMISS");
      });
    this.demandSvc.get()
      .subscribe(x => {
        this.demand = x;
      }, err => {
        this.notificationSvc.message("Failed to load Trade data!!!", "DISMISS");
      })
  }


  confirmDelete(data: Trade) {
    //console.log(data);
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      enterAnimationDuration: '400ms'
    }).afterClosed()
      .subscribe(result => {
        //console.log(result);
        if (result) {
          this.tradeSvc.delete(data)
            .subscribe({
              next: r => {
                this.notificationSvc.message('Trade removed', 'DISMISS');
                this.dataSource.data = this.dataSource.data.filter(c => c.tradeId != data.tradeId);
              },
              error: err => {
                this.notificationSvc.message('Failed to delete data', 'DISMISS');
                throwError(() => err);
              }
            })
        }
      })
  }
}

