import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {
    transform(content: any[], type?: string): any[] {
        //filter types from content array
        if(!type)
        {
            return content.filter(c => !c.type);
        }
        else{
            return content.filter(c => c.type==type);
        }
    }
    }