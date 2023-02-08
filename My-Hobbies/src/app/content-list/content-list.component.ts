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




  content:Content[]=[{
    id:0,
    title: 'footballl',
    description: 'I like to play football with my freinds.because it refresh me.',
    creator: 'my Freinds',
    type: 'game and hobbiess',
    imgURL:'/assets/img/1.jpg'
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
      title: 'Movies  ',
      description: 'I like to Watch movies with Family and freinds.because it refresh me..',
      creator: 'my Freinds',
      type: '',
      imgURL:'/assets/img/3.jpg'
  
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
    type: 'music',
    imgURL:'/assets/img/5.jpg'
  
  }
  
  ];





}