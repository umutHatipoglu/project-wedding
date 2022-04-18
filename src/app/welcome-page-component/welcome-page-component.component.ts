import { animate, animateChild, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page-component',
  templateUrl: './welcome-page-component.component.html',
  styleUrls: ['./welcome-page-component.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 })),
        query('@childAnimation', [
          animateChild()
        ])
      ])
    ]),
    trigger('childAnimation', [
      transition(':enter', [
        query('span', [
          style({ opacity: 0 }),
          stagger(900, [
            animate('0.5s', style({ opacity: 1 })),
            animate('1.5s', style({ opacity: 0 }))
          ]),
        ])
      ])
    ])
  ]
})
export class WelcomePageComponentComponent implements OnInit {

  constructor(private router: Router ) { }

  texts = ['hello', 'merhaba', 'hallo', 'こんにちは']
  backdropDisplay!: string;
  onRemove = false;


  ngOnInit(): void {
  }

  animationDone(){
    this.onRemove = true;
  }

  navigate(){
    this.router.navigate(['main-page']);
  }

}
