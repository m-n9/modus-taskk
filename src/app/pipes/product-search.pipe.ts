import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(items: any[], nameSearch: string)
  {
    if (items && items.length){
        return items.filter(item => {
            if (nameSearch && item.title.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
                return false;
            }

            return true;
       })
    }
    else{
        return items;
    }
}

}
