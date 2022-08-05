import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';



@NgModule({
  declarations: [
    RestaurantComponent,
    LoadingRestaurantComponent,
    EmptyScreenComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RestaurantComponent,
    LoadingRestaurantComponent,
    EmptyScreenComponent
  ],
  entryComponents: []
})
export class ComponentsModule { }
