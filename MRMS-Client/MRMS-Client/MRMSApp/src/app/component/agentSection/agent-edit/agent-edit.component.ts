import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from '../../../models/Agent/agent';
import { AgentService } from '../../../services/Agents/agents.service';
import { NotificationService } from '../../../services/Shared/notification.service';


@Component({
  selector: 'app-agent-edit',
  templateUrl: './agent-edit.component.html',
  styleUrls: ['./agent-edit.component.css']
})
export class AgentEditComponent {
  agent: Agent = new Agent();
  agentForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
   
  });

  f() {
    return this.agentForm.controls;
  }
  constructor(
    private agentSvc: AgentService,
    private notificationSvc: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  update(): void {
    if (this.agentForm.invalid) return;
    console.log(this.agentForm.value);

    Object.assign(this.agent, this.agentForm.value);
    console.log(this.agent);

    this.agentSvc.update(this.agent)
      .subscribe(r => {
        this.notificationSvc.message("Data Update successfully!!!", "DISMISS");
        this.router.navigate(['/agent']);
        this.agentForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to Update data!!!", "DISMISS");
      })
  }




  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.agentSvc.getById(id)
      .subscribe(x => {
        this.agent = x;
        this.agentForm.patchValue(this.agent);
      }, err => {
        this.notificationSvc.message("Failed to load Medical Agent List!!", "DISMISS");
      })
  }
}
