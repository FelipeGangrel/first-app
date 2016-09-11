import { Component } from '@angular/core';

@Component({
  selector: 'myapp-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'Interpolação de string';
  numberInterpolation = 2;
}
