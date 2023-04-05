import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Content } from '../helper-files/content-interface';
import { HobbiesService } from '../service/hobbies-service.service';
import { MessageServiceService } from '../service/message-service.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  
  constructor(private contentService: HobbiesService,private messageService: MessageServiceService,private dialog: MatDialog)
  {
    
  }
  @Output() contentAdded = new EventEmitter<Content>();
  openDialog()
  {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {} // You can pass data to the dialog if needed
    });
    dialogRef.afterClosed().subscribe(result => {
      debugger
      console.log(`Dialog result: ${result}`);
      this.addContent(result)
    });
  }
  addContent(content:any) {
    debugger
    console.log(content)
    debugger
    if(content.id!=null)
    {
      //update content
      const updatedContent: Content = {
        id: content.id,
        title: content.title,
        description: content.description,
        creator: content.creater,
        type:content.type
      };
      this.contentService.updateHero(updatedContent).subscribe(() => {
        this.messageService.addMessage(`Content ${updatedContent.id} updated successfully`);
        // this.clearInputs();
       // this.addUpdateButtonText = 'Add Content';
        this.contentAdded.emit(updatedContent);
      });
    }
    else
    {
      const newContent: Content = {
        id: null,
        title: content.title,
        description: content.description,
        creator: content.creater,
        type:content.type
      };
         
    this.contentAdded.emit(newContent);
    }
    
    // emit the new content to the parent component
 

    // clear input fields
    // this.title = '';
    // this.description = '';
    // this.creater = '';
    // this.type = '';
  }
}
