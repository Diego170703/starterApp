import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { INTRO_KEY } from 'src/app/guards/public.guard';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';

register();

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  language: string = '';
  last_slide: boolean = false;


  // Swiper config
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    allowTouchMove: false, // set true to allow swiping
    pagination: true,
    autoHeight: true,
    navigation: {
      nextEl: '.swiperButtonVext',
      prevEl: '.swiper-button-prev',
    },
  }
  swiperEl: any;

  constructor(private router: Router) { }

  ngOnInit() { 
    
  }

  next() {
    //this.swiper?.slideNext();
    this.swiperRef?.nativeElement.swiper.swiper?.slideNext();
    console.log("next");
  }

  async start() {
    await Preferences.set({ key: INTRO_KEY, value: 'true' });
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  // Go to main content
  async getStarted() {

    // Navigate to /home
    this.router.navigateByUrl('/signin');
  }
  // Go to next slide
  nextSlide() {
    const swiperEl = document.querySelector('swiper');
    this.swiperEl?.nativeElement.swiper.swiper?.slideNext(500);
    console.log("nextSlide");
  }
}
