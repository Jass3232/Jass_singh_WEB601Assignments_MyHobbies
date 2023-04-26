import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';
import { HobbiesService } from '../service/hobbies-service.service';
import { MessageServiceService } from '../service/message-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  title: string ="";
  description: string=""
  creater: string ="";
  type: string ="";
  idInput:any;

  

constructor(private contentService: HobbiesService,private messageService: MessageServiceService,public dialogRef: MatDialogRef<DialogComponent>)
{

}

  addContent() {
    debugger
    if(this.idInput>0)
    {
      //update content
      const updatedContent: Content = {
        id: this.idInput,
        title: this.title,
        description: this.description,
        creator: this.creater,
        type:this.type
      };
      this.contentService.updateHero(updatedContent).subscribe(() => {
        this.messageService.addMessage(`Content ${updatedContent.id} updated successfully`);
        this.dialogRef.close(updatedContent);
        // this.clearInputs();
       // this.addUpdateButtonText = 'Add Content';
        
      });
    }
    else
    {
      const newContent: Content = {
        id: null,
        title: this.title,
        description: this.description,
        creator: this.creater,
        type:this.type
      };
      this.dialogRef.close(newContent);
   
    }
    
    // emit the new content to the parent component
 

    // clear input fields
    this.title = '';
    this.description = '';
    this.creater = '';
    this.type = '';
  }
}
