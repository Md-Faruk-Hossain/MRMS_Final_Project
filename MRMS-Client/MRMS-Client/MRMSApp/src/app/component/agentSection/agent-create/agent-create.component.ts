import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Agent } from '../../../models/Agent/agent';
import { AgentService } from '../../../services/Agents/agents.service';
import { NotificationService } from '../../../services/Shared/notification.service';

@Component({
  selector: 'app-agent-create',
  templateUrl: './agent-create.component.html',
  styleUrls: ['./agent-create.component.css']
})
export class AgentCreateComponent {
  agent: Agent = new Agent();
  agentForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    
  });
      /*agent: Agent[] = [];*/
  f() {
    return this.agentForm.controls;
  }
  constructor(
    private agentSvc: AgentService,
    private notificationSvc: NotificationService,
    private router: Router
  ) { }
  insert(): void {
    if (this.agentForm.invalid) return;
    console.log(this.agentForm.value);

    Object.assign(this.agent, this.agentForm.value);
    console.log(this.agent);

    this.agent.name = this.f()['name'].value;
    this.agent.address = this.f()['address'].value;
    this.agent.phone = this.f()['phone'].value;
    this.agent.email = this.f()['email'].value;

    this.agentSvc.insert(this.agent)
      .subscribe(r => {
        this.notificationSvc.message("Data saved successfully!!!", "DISMISS");
        this.router.navigate(['/agent']);
        this.agentForm.reset({});
        console.log(r);
      }, err => {
        this.notificationSvc.message("Failed to save data!!!", "DISMISS");
      })
  }
  ngOnInit(): void {
    //this.agentSvc.get()
    //  .subscribe(r => {
    //    this.agent = r;
    //  }, err => {
    //    this.notificationSvc.message("Failed to load Company", "DISMISS");
    //  })
  }
}
