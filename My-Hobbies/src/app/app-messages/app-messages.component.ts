import { Component } from '@angular/core';
import { MessageServiceService } from '../service/message-service.service';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.scss']
})
export class AppMessagesComponent {
  messages: string[] = [];

  constructor(private messageService: MessageServiceService) { }

  ngOnInit(): void {
    this.messageService.messages$.subscribe((message) => {
      this.messages=[];
      this.messages.push(message);
    });
  }
}
