import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-square',
  standalone: true,
  imports: [MatButtonModule],
  template: `
      <button mat-fab >{{ value }}</button>
  `,
  styles: `button { 
    width: 100%;
    height: 100%;
    font-size: 5em !important;
  }`
})
export class SquareComponent {


  @Input() value: string;

}
