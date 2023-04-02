import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  ngOnInit(): void {
    new Rellax('.rellax-background', {
      speed: -4,
      center: true,
    });
  }
}