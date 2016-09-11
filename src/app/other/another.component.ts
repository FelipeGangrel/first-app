import { Component } from '@angular/core';

@Component({
  selector: 'myapp-another',
  template: '<article><ng-content></ng-content></article>',
  styles: ['article{border: 1px solid #000; padding: 15px; margin-bottom: 5px}']
})
export class AnotherComponent {

}
