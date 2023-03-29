import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { HobbiesService } from '../service/hobbies-service.service';
import { MessageServiceService } from '../service/message-service.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  title: string ="";
  description: string=""
  creater: string ="";
  type: string ="";
  idInput:any;
  constructor(private contentService: HobbiesService,private messageService: MessageServiceService)
  {
    
  }
  @Output() contentAdded = new EventEmitter<Content>();
  addContent() {
    debugger
    if(this.idInput)
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
        // this.clearInputs();
       // this.addUpdateButtonText = 'Add Content';
        this.contentAdded.emit(updatedContent);
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
         
    this.contentAdded.emit(newContent);
    }
    
    // emit the new content to the parent component
 

    // clear input fields
    this.title = '';
    this.description = '';
    this.creater = '';
    this.type = '';
  }
}
