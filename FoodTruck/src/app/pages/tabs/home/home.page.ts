import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  banners: any[] = [];
  restaurants: any[] = [];
 
  

  constructor() { }

  ngOnInit() {
    this.banners = [
      {banner: 'assets/imgs/1.jpg'},
      {banner: 'assets/imgs/2.jpg'},
      {banner: 'assets/imgs/5.jpg'},
    ];
    this.restaurants = [
       {
        cover: 'assets/imgs/1.jpg',
        name: 'Glorious Buns1',
        cuisines: [
          'Burgers',
          'Fries'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100,
    
      },
      {
        cover: 'assets/imgs/1.jpg',
        name: 'Glorious Buns2',
        cuisines: [
          'Burgers',
          'Fries'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100,
    
      },
      {
        cover: 'assets/imgs/1.jpg',
        name: 'Glorious Buns3',
        cuisines: [
          'Burgers',
          'Fries'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100,
    
      }
    ]
  }

}
