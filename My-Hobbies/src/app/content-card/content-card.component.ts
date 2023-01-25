
import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';










@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})





export class ContentCardComponent implements OnInit {

contentList = new ContentList();

constructor() {
  this.contentList.add({
    id: 1,
      title: 'football',
      description: 'I like to play football with my freinds.because it refresh me.',
      creator: 'my Freinds',
      type: 'game and hobbies',
  });
  this.contentList.add({
    id: 2,
    title: 'Food',
    description: 'Favourite food.I like to eat pizza because it is very delicious. I love to eat it once a week.',
    creator: 'jaspreet singh',
    type: 'hobbies',
  });
  this.contentList.add({
    id: 3,
        title: 'Movies',
        description: 'I like to Watch movies with Family and freinds.because it refresh me..',
        creator: 'my Freinds',
        type: 'Hobbies',
  });
}

ngOnInit(): void {
}

}