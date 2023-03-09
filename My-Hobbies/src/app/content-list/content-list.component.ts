import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { HobbiesService } from '../service/hobbies-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content:Content[]=[];
  ngOnInit(): void {
    this.contentService.getContent().subscribe(content => {
      this.content = content;
    });
  }
 
  constructor(private contentService: HobbiesService)
  {
    
  }
  searchTitle:string | undefined;
  exist=false;
  message:string | undefined
  search()
  {
   const contentSearch= this.content.find(search=>search.title.toLowerCase()==this.searchTitle?.toLowerCase());
   this.exist=!!contentSearch;
   this.message=this.exist? `Content with tilte "${this.searchTitle}"  exist`: `Content with tilte "${this.searchTitle}"  does not exist`
  }


 




}