import { Component, Input, OnInit } from '@angular/core';
import { faCoffee, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss']
})
export class SchedulePageComponent {
  @Input() isRegular: boolean | null = false;
  faInfo = faInfoCircle;

}
