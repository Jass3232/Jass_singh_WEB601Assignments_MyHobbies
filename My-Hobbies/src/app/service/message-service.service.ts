import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private messages = new Subject<string>();
  messages$ = this.messages.asObservable();

  constructor() { }

  addMessage(message: string): void {
    this.messages.next(message);
  }
}
