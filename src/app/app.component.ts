import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent implements OnInit {
  @ViewChild('fullpageRef') fp_directive!: ElementRef;
  config;
  fullpage_api: any;

  constructor() {
    this.config = {
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      navigation: true,
      sectionsColor: ['#fff', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']     
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }
}