import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentDb } from '../helper-files/contentDb';
import { MessageServiceService } from './message-service.service';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  constructor(private messageService: MessageServiceService) { }
  
  getContent(): Observable<any[]> {
    this.messageService.addMessage('Content array loaded!');
    return of(contentDb);
  }
  getContentById(id: number): Observable<any> {
    this.messageService.addMessage(`Content Item at id: ${id}`);
    return of(contentDb.find(content => content.id === id)); 
  }
}
