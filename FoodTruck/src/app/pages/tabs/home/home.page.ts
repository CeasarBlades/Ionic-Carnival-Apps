import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  banners: any[] = [];
  restaurants: any[] = [];
  isLoading: boolean = false;
  
 
  

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.banners = [
        {banner: 'assets/imgs/1.jpg'},
        {banner: 'assets/imgs/2.jpg'},
        {banner: 'assets/imgs/5.jpg'},
      ];
      this.restaurants = [
         {
          uid: 'jbndfij',
          cover: 'assets/imgs/1.jpg',
          name: 'Glorious Buns1',
          short_name: 'glorious buns1',
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
          uid: '6512644',
          cover: 'assets/imgs/2.jpg',
          name: 'Glorious Buns2',
          short_name: 'glorious buns2',
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
          uid: '651fgfgfsdgfd',
          cover: 'assets/imgs/3.jpg',
          name: 'Glorious Buns3',
          short_name: 'glorious buns3',
          cuisines: [
            'Burgers',
            'Fries'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100,
        },
      ];
      this.isLoading = false;
    }, 3000);
    
  }

}
