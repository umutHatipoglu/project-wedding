import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rsvp-page',
  templateUrl: './rsvp-page.component.html',
  styleUrls: ['./rsvp-page.component.scss']
})
export class RsvpPageComponent implements OnInit {
  @Input() isRegular: boolean | null = false;

  formGroup: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      isComing: new FormControl(''),
      beefNumber: new FormControl(''),
      fishNumber: new FormControl(''),
      vegetarianNumber: new FormControl(''),
    });


    this.formGroup.valueChanges.subscribe((value)=> console.log(value))
  }

  get isComing(){
    return this.formGroup && this.formGroup.get('isComing')?.value;
  }

}
