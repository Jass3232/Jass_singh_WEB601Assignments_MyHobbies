import {Content} from './content-interface'

export class ContentList{

    private _contentitem:  Content[];

    constructor(){
        this._contentitem =[];
    }
    get contentitem(): Content[]{
        return this._contentitem;
    }
    add(newContent: Content){
        this._contentitem.push(newContent);
    }
    count(): number {
        return this._contentitem.length;
    }

    displayAtIndex(index: number): string {
       
        if (index < 0 || index >= this._contentitem.length) {
           
        }
     
        const list= this._contentitem[index];
      
      
        return `<h3>${list.title}</h3>
                <h5>${list.description}</h5>
                <h5> ${list.creator}</h5>
                <img src="${list.imgURL}" alt="${list.title}">
                <h5>Type: ${list.type}</h5>`;
    }
}   