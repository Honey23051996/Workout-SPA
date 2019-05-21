import { Pipe, PipeTransform } from "@angular/core";
import { Category } from "./Category";

@Pipe({ name: 'SearchBar' })
export class FilterPipe implements PipeTransform {
  transform(cate: Category[], searchtext: string): Category[] {
    if (searchtext.length == 0) {
      return cate;
    }
    else {
      return cate.filter(item => item.category_name.toLowerCase() == searchtext)
    }
  }
}
