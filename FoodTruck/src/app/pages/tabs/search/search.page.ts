import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild("searchInput") sInput;
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants found'
  };
  isLoading: boolean;
  query: any[]
  allRestaurants: any [] = [
    {
     cover: 'assets/imgs/1.jpg',
     name: 'Glorious Buns1',
     short_name: 'glorious buns1',
     cuisines: [
       'Burgers',
       'Fries'
     ],
     rating: 5,
     delivery_time: 25,
    //  distance: 2.5,
     price: 100,
 
   },
   {
     cover: 'assets/imgs/2.jpg',
     name: 'Glorious Buns2',
     short_name: 'glorious buns2',
     cuisines: [
       'Burgers',
       'Fries'
     ],
     rating: 5,
     delivery_time: 25,
    //  distance: 2.5,
     price: 100,
 
   },
   {
     cover: 'assets/imgs/3.jpg',
     name: 'Glorious Buns3',
     short_name: 'glorious buns3',
     cuisines: [
       'Burgers',
       'Fries'
     ],
     rating: 5,
     delivery_time: 25,
    //  distance: 2.5,
     price: 100,
   },
 ];

 restaurants: any[] = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    },500)
  }

  async onSearchChange(event) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    if(this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async() => {
        this.restaurants = await this.allRestaurants.filter((element: any) => {
          return element.short_name.includes(this.query);
        });
        console.log(this.restaurants);
        this.isLoading = false;
      }, 3000);
    }
  }
}

    

