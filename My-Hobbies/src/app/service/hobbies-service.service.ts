import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentDb } from '../helper-files/contentDb';
import { MessageServiceService } from './message-service.service';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  constructor(private http: HttpClient) { }
  
  // getContent(): Observable<any[]> {
  //   this.messageService.addMessage('Content array loaded!');
  //   return of(contentDb);
  // }
  // getContentById(id: number): Observable<any> {
  //   this.messageService.addMessage(`Content Item at id: ${id}`);
  //   return of(contentDb.find(content => content.id === id)); 
  // }

  getContent() {

    return  this.http.get<Content[]>('api/contentDb');
  }
  getContentById(id: number) {

    return  this.http.get<Content[]>('api/contentDb/'+id);
  }
  updateHero(content:any) {
    return this.http.put(`/api/contentDb/${content.id}`, content);
  }
  addcontent(content:any) {
  
    return this.http.post('api/contentDb', content);
  }
}
