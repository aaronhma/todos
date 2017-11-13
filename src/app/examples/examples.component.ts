import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../animations';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [ pageTransition ]
})
export class ExamplesComponent implements OnInit {
  state: string = 'in';

  constructor() { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

}