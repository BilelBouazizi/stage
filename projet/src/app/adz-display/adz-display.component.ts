import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adz-display',
  templateUrl: './adz-display.component.html',
  styleUrls: ['./adz-display.component.css']
})
export class AdzDisplayComponent {

  @Input()
  item: Object;

  constructor() { }

}
