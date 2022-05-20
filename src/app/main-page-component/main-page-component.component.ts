import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page-component',
  templateUrl: './main-page-component.component.html',
  styleUrls: ['./main-page-component.component.scss']
})
export class MainPageComponentComponent implements OnInit {

  @ViewChild('fullpageRef') fp_directive!: ElementRef;
  config;
  fullpage_api: any;

  constructor() {
    this.config = {
      anchors: ['home', 'info', 'reservation', 'contact'],
      menu: '#menu',
      navigation: true,
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

}


//reservation
//isim soyisim 
//comment
//yemek tercihi
//katilitp/katilmama