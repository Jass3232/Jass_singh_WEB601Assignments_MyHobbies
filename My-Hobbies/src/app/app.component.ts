import { Component } from '@angular/core';
//import { Component } from '@src/interfaces/Content.ts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My-Hobbies';
  
  content = {
    contentId: 1,
    imageUrl:'https://angular.io/assets/images/logos/angular/angular.png',
    body: 'This is the body of the content',
    type: 'news'
    };






}