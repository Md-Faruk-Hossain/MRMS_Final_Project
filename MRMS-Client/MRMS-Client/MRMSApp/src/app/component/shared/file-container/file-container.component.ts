import { Component,Input,Output,OnInit, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { FileContainer } from '../../../models/common/file-container';
import { FileTypes } from '../../../models/common/file-types';
import { FileTypeService } from '../../../services/common/file-type.service';
import { NotificationService } from '../../../services/Shared/notification.service';

@Component({
  selector: 'app-file-container',
  templateUrl: './file-container.component.html',
  styleUrls: ['./file-container.component.css']
})
export class FileContainerComponent {

  fileTypes: FileTypes[] = [];

  constructor(
    private fileTypeSvc: FileTypeService,
    private notifyService: NotificationService
  ) { }

  @Input() row: any;

  @Output() ItemRemoved : EventEmitter<any> = new EventEmitter<any>();
  @Output() FileChange : EventEmitter<any> = new EventEmitter<any>();

  removeItem(){
    this.ItemRemoved.emit();
  }
  handleFileInputChange($event: any){
    const file:File = $event.target.files[0];
    if(file && file.size > 0){
      this.FileChange.emit(file);
    }
  }

  ngOnInit(): void {
    this.fileTypeSvc.get()
      .subscribe({
        next: r => {
          this.fileTypes = r;
        },
        error: err => {
          this.notifyService.message("Failed to load FileTypes", 'DISMISS');
        }
      });

  }


}
