import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  
  id: any;
  data: any = {};
  items: any[]= [];
  catergories: any[]= [];
  restaurants = [
    {
     uid: 'jbndfij',
     cover: 'assets/imgs/1.jpg',
     name: 'Glorious Buns1',
     short_name: 'glorious buns1',
     address: 'Bpm, Wellington',
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
     address: 'Tawa, Wellington',
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
     address: 'Jville, Wellington',
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

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data ', paramMap);
      if(!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('restaurantId');
      console.log('id: ', this.id);
      this.getItems();

    });
  }

  getItems() {
    this.data = {};
    let data: any = this.restaurants.filter(x => x.uid === this.id);
    this.data = data[0];
    console.log('restaurants: ', this.data)
  }

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }

}
