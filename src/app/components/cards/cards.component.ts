import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  //card header
  mencardheader: string = "Men's Fashion";
  //white tshirt info

  tshirt1: string = "Nike's White Tshirt | Pure Cotton";
  subtitle1: string = 'Men branded white tshirt';
  price1: string = 'Rs. 799';

  //Blue shirt info

  blueshirt: string = 'Axrood Blue Shirt for Men';
  bsub: string = 'Formal wear blue shirt';
  p2: string = 'Rs. 999';

  //combo shirt info

  comboshirt1: string = 'Rare-Rabbit Men combo shirts for Men';
  csub: string = 'Combo shirts for men';
  p3: string = 'Rs. 3699';

  //blazzer card info

  blazzer1: string = 'Zara Men Blazzer | Luxary wear';
  bzsub: string = 'Black branded blazzerr';
  p4: string = 'Rs. 1899';

  //Shoe home card  info
  shoecard: string = 'Nike Air Shoe | White shoes';
  shoesub: string = 'Nike shoe pure leather';
  p5: string = 'Rs. 4999';

  //jean card info
  jeancard: string = 'Axrood Blue Jeans for Men | Jeans';
  jsub: string = 'Jeans bottom wear for men';
  p6: string = ' Rs. 1199';
}
