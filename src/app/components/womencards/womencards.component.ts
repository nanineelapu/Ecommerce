import { Component } from '@angular/core';

@Component({
  selector: 'app-womencards',
  templateUrl: './womencards.component.html',
  styleUrls: ['./womencards.component.css'],
})
export class WomencardsComponent {
  womencardheader: string = "Women's Fashion";

  //Card 1
  wcard1: string = 'Nykaa Women Olive combo wear';
  wcardsub: string = 'Fashion | Women combo wear';
  price1: string = 'Rs. 1499';

  //card 2

  wcard2: string = 'H & M | Women Pink casual wear';
  wcardsub1: string = 'Casual combo wear for women';
  p2: string = 'Rs. 1299';

  //card 3

  wcard3: string = 'AND | Women combo casual wear';
  wcardsub2: string = 'Casual top and bottom wears for women';
  p3: string = 'Rs. 1099';

  //card 4

  wcard4: string = 'Royal | Women Hoodie Winter wear';
  wcardsub3: string = 'Casual top hoodie for women';
  p4: string = 'Rs. 979';

  //card 5

  wcard5: string = 'ZaRa | Footwear for Women';
  wcardsub4: string = 'women footwear for regular wear';
  p5: string = 'Rs. 779';

  //card 6

  wcard6: string = 'METRO | Unisex Travel Trolley';
  wcardsub5: string = 'Beige lugguage bag for travel';
  p6: string = 'Rs. 4449';
}
