import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { pageTransition } from '../animations';


@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.scss'],
  animations: [
    pageTransition
  ],
})
export class HowtoComponent implements OnInit {
  state: string = 'in';

  constructor() { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

}
