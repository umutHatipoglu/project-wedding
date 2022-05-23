import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rsvp-page',
  templateUrl: './rsvp-page.component.html',
  styleUrls: ['./rsvp-page.component.scss']
})
export class RsvpPageComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

}
