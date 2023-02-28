import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<any>();
  newContent: any = {};
  errorMessage: string="";
  onSubmit() {
    debugger
    // send new content item up to ContentList using promise pattern
    this.sendContentUp().then(
    (result) => {
    // success function
    // console.log(Addition is successful for ${result.title});
    this.newContent = {}; // clear input fields
    this.contentAdded.emit(result); // emit event with new content
    },
    (error) => {
    // error function
    console.error(error);
    }
    );
    }
    sendContentUp(): Promise<any> {
      // simulate API call
      debugger
      return new Promise((resolve, reject) => {
         // Check for required fields
      if (!this.newContent.title) {
        const errorMessage = 'Please fill in all required fields.';
        console.error(errorMessage);
        this.errorMessage = 'Please fill in all required fields.';
        reject(errorMessage);
        return;
      }
        setTimeout(() => {
          const clonedContent = Object.assign({}, this.newContent);
          // add new content to ContentList using resolved promise
          resolve(clonedContent);
        }, 2000);
      });
    }
}
