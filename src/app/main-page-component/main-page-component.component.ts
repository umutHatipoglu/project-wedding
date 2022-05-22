import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-main-page-component',
  templateUrl: './main-page-component.component.html',
  styleUrls: ['./main-page-component.component.scss']
})
export class MainPageComponentComponent {

  @ViewChild('fullpageRef') fp_directive!: ElementRef;
  config;
  fullpage_api: any;
  isRegular$: Observable<boolean> = this.route.queryParams.pipe(map((params)=> params['type'] === 'regular'));

  constructor(private route: ActivatedRoute) {
    this.config = {
      anchors: ['home', 'welcom', 'schedule', 'reservation', 'contact'],
      menu: '#menu',
      navigation: true,
    };
  }



  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

}
