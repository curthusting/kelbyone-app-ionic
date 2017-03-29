import {Pipe} from '@angular/core';

@Pipe({
  name: 'duration'
})
export class Duration {
  transform(seconds) {
    var date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 5);
  }
}
