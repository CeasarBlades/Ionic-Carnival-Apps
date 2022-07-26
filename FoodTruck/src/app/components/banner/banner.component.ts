import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  
  bannerImages: any[] = [
    {banner: 'assets/imgs/1.jpg'},
    {banner: 'assets/imgs/2.jpg'},
    {banner: 'assets/imgs/5.jpg'},
  ];
  
  slideOptions = {
    slidesPerView: 1.1
  }

  constructor() { }

  ngOnInit() {}

}
