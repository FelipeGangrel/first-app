import { Component } from '@angular/core';

@Component({
  selector: 'myapp-other',
  template:'<p>{{title}}</p>',
  styles: [
    'p{color: blue}'
  ]
})
export class OtherComponent {
  title: string = "Other component - Olha o macaco!";
}
