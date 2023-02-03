
import { Component, Input, OnInit } from '@angular/core';

import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent  {

 @Input() con:any ;
public Onclick(content:any)
{
  console.log("Id="+content.id +"  Title="+content.title );
}

}