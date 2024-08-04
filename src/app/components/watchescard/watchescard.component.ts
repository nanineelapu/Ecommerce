import { Component } from '@angular/core';

@Component({
  selector: 'app-watchescard',
  templateUrl: './watchescard.component.html',
  styleUrls: ['./watchescard.component.css'],
})
export class WatchescardComponent {
  //watch card
  watchcardheader: string = 'Watch Collections';

  //watch card 1
  watchcard1: string = 'Lorenz';
  watchcardsub: string = 'Men Analog Watch-SP099SAE';
  p1: string = 'Rs. 3339';

  //Watch card 2

  watchcard2: string = 'Fossil';
  watchcardsub1: string = 'Men Analog Watch-Model-AE144FRS3';
  p2: string = 'Rs. 4999';

  //watch card 3
  watchcard3: string = 'Tissot';
  watchcardsub2: string = 'Men Analog Watch-Model-PFHH14RS3';
  p3: string = 'Rs. 3199';

  //watch card 4
  watchcard4: string = 'Armani | Xchange';
  watchcardsub3: string = 'Men Analog Watch-AXDDE4533';
  p4: string = 'Rs. 5499';

  // watch card 5

  watchcard5: string = 'Fossil';
  watchcardsub4: string = 'Men Analog Watch-Model-NXIW1855G';
  p5: string = 'Rs. 2999';

  constructor() {}
}
