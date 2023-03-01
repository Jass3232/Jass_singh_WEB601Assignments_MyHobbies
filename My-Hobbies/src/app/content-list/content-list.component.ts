import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // searchTitle:string | undefined;
  // exist=false;
  // message:string | undefined
  // search()
  // {
  //  const contentSearch= this.content.find(search=>search.title.toLowerCase()==this.searchTitle?.toLowerCase());
  //  this.exist=!!contentSearch;
  //  this.message=this.exist? `Content with tilte "${this.searchTitle}"  exist`: `Content with tilte "${this.searchTitle}"  does not exist`
  // }

  addNewContent(content: any): void {
    debugger
    // add the new content to the contents array
    this.content.push(content);

    // log a success message
    console.log(`Added ${content.title} successfully`);

    // clone the contents array to trigger change detection
    this.content = this.content.slice();
  }
  content:Content[]=[{
    id:0,
    title: 'football',
    description: 'I like to play football with my freinds.because it refresh me.',
    creator: 'my Freinds',
    type: 'game and hobbiess',
    imgURL:''
  },
  
  {
  id: 1,
  title: 'Food',
  description: 'Favourite food.I like to eat pizza because it is very delicious. I love to eat it once a week.',
  creator: 'jaspreet singh',
  type: 'hobbies',
  imgURL:'/assets/img/2.jpg'
  
  },
    {
  id: 2,
      title: 'Movies',
      description: 'I like to Watch movies with Family and freinds.because it refresh me..',
      creator: 'my Freinds',
      type: '',
      imgURL:''
  
  },
  {
  id:3,
  title: 'cricket',
  description: 'I like to play cricket with my freinds.because it refresh me.',
  creator: 'my Freinds',
  type: '',
  imgURL:'/assets/img/7.jpg'
  },
  
  {
  id: 4,
  title: 'books',
  description: 'I like to read books.',
  creator: 'jaspreet singh',
  type: 'singing',
  imgURL:'/assets/img/4.jpg'
  },
  {
  id: 6,
    title: 'sports',
    description: 'I like play sports.because it refresh me..',
    creator: 'my Freinds',
    type: 'video',
    imgURL:'/assets/img/5.jpg'
  
  },{
  id: 7,
    title: 'sports',
    description: 'I like play sports.because it refresh me..',
    creator: 'my Freinds',
    type: 'Food',
    imgURL:'/assets/img/5.jpg'
  
  }
  
  ];





}