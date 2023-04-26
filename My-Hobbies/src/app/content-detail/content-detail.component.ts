import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HobbiesService } from '../service/hobbies-service.service';
import { MessageServiceService } from '../service/message-service.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id= 0;
  content: any;

  constructor(
    private route: ActivatedRoute,
    private hobbyService: HobbiesService,
    private messageService: MessageServiceService
  ) {}
  ngOnInit(): void {
    debugger
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.hobbyService.getContentById(this.id).subscribe((content) => {
      this.content = content;
      console.log(this.content);
      this.messageService.addMessage(`Content ID: ${this.content.id} - ${this.content.title}`);
    });
  }
}
