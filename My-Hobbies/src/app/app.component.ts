import { Component } from '@angular/core';

import { HobbiesService } from './service/hobbies-service.service';
import { MessageServiceService } from './service/message-service.service';
//import { Component } from '@src/interfaces/Content.ts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My-Hobbies';
  contentCard: any;
  errorMsg: any;
  id: any;

  constructor(private contentService: HobbiesService,
    private messageService: MessageServiceService) { }



  onRetrieve(): void {
    
    this.errorMsg = '';

   
    const idNumber = parseInt(this.id);

   
    if (isNaN(idNumber) || idNumber < 1) {
      this.errorMsg = 'Invalid ID number entered';
      this.messageService.addMessage(this.errorMsg);
      return;
    }
    debugger
  
 
    // this.contentService.getContent().subscribe(content => {
    //   if (idNumber > content.length) {
      
    //     this.errorMsg = 'Invalid ID number entered';
    //     this.messageService.addMessage(this.errorMsg);
    //   } else {
      
    //     this.contentService.getContentById(idNumber).subscribe(
    //       (contentCard: any) => {
    //         this.contentCard = contentCard;
    //         this.messageService.addMessage(`Content Card at ID ${idNumber} retrieved`);
    //       },
    //       (error: any) => {
            
    //         this.errorMsg = 'Error retrieving content card';
    //         this.messageService.addMessage(this.errorMsg);
    //       }
    //     );
    //   }
    // });
  }
}