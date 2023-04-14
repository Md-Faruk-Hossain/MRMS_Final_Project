import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { throwError } from 'rxjs';
import { MedicalCenter } from '../../../../models/MedicalSection/medical-center';
import { MedicalCenterService } from '../../../../services/MedicalSection/medical-center.service';
import { NotificationService } from '../../../../services/Shared/notification.service';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-medical-center-view',
  templateUrl: './medical-center-view.component.html',
  styleUrls: ['./medical-center-view.component.css']
})
export class MedicalCenterViewComponent {
  medicalCenter: MedicalCenter[] = [];
  dataSource: MatTableDataSource<MedicalCenter> = new MatTableDataSource(this.medicalCenter);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["name", "address", "phone", "fax", "email","website", "actions"];

  constructor(
    private medicaleCenterSvc: MedicalCenterService,
    private notificationSvc: NotificationService,
    private dialog: MatDialog
  ) { }
  confirmDelete(data: MedicalCenter) {
    //console.log(data);
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      enterAnimationDuration: '400ms'
    }).afterClosed()
      .subscribe(result => {
        //console.log(result);
        if (result) {
          this.medicaleCenterSvc.delete(data)
            .subscribe({
              next: r => {
                this.notificationSvc.message('Medicale Center removed from the list', 'DISMISS');
                this.dataSource.data = this.dataSource.data.filter(c => c.medicalCenterId != data.medicalCenterId);
              },
              error: err => {
                this.notificationSvc.message('Failed to delete data', 'DISMISS');
                throwError(() => err);
              }
            })
        }
      })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //filterDate(queryDate: any) {
  //  //const filterDate = new Date(queryDate); 
  //  this.dataSource.filter = queryDate.toISOString().split('T')[0];
  //  this.medicalCenter;
  //}

  ngOnInit(): void {


    this.medicaleCenterSvc.get().
      subscribe(x => {

      
        this.medicalCenter = x;
        console.log(x);
        this.dataSource.data = this.medicalCenter;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {
        this.notificationSvc.message("Failed to load Medical Center List", "DISMISS");
      });
  }
}
