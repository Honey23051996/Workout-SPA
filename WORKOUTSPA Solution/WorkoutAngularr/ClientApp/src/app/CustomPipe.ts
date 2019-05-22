import { Pipe, PipeTransform } from "@angular/core";
import { Workout } from "./Workout";

@Pipe({ name: 'CPipe' })
export class CPipe implements PipeTransform {
  transform(wrkt: Workout[], searchtext: string): Workout[] {
    if (searchtext.length == 0) {
      return wrkt;
    }
    else {
      return wrkt.filter(item => item.workout_title.toLowerCase().startsWith(searchtext.toLowerCase()))
    }
  }
}
