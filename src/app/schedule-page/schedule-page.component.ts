import { Component, Input, OnInit } from '@angular/core';
import { faCoffee, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Information</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>{{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name = '';

  constructor(public activeModal: NgbActiveModal) {}
}
@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss']
})
export class SchedulePageComponent {
  @Input() isRegular: boolean | null = false;
  faInfo = faInfoCircle;
  constructor(private modalService: NgbModal) {}

  open(value: any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    
    modalRef.componentInstance.name = value;
  }
}
