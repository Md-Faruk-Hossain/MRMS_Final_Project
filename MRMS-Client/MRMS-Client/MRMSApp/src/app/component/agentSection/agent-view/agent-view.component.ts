import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { throwError } from 'rxjs';
import { Agent } from '../../../models/Agent/agent';
import { AgentService } from '../../../services/Agents/agents.service';
import { NotificationService } from '../../../services/Shared/notification.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrls: ['./agent-view.component.css']
})
export class AgentViewComponent {
  agent: Agent[] = [];
  dataSource: MatTableDataSource<Agent> = new MatTableDataSource(this.agent);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["name", "address", "phone", "email", "actions"];

  constructor(
    private agentSvc: AgentService,
    private notificationSvc: NotificationService,
    private dialog: MatDialog
  ) { }
  confirmDelete(data: Agent) {
    //console.log(data);
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      enterAnimationDuration: '400ms'
    }).afterClosed()
      .subscribe(result => {
        //console.log(result);
        if (result) {
          this.agentSvc.delete(data)
            .subscribe({
              next: r => {
                this.notificationSvc.message('Agent removed from the list', 'DISMISS');
                this.dataSource.data = this.dataSource.data.filter(c => c.agentId != data.agentId);
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


    this.agentSvc.get().
      subscribe(x => {


        this.agent = x;
        console.log(x);
        this.dataSource.data = this.agent;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {
        this.notificationSvc.message("Failed to load Agent List", "DISMISS");
      });
  }
}
