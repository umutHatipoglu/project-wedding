import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rsvp-page',
  templateUrl: './rsvp-page.component.html',
  styleUrls: ['./rsvp-page.component.scss']
})
export class RsvpPageComponent implements OnInit {
  @Input() isRegular: boolean | null = false;

  isFormVisible = true;
  isLoading = false;

  formGroup: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      isComing: new FormControl(''),
      beefNumber: new FormControl(''),
      fishNumber: new FormControl(''),
      vegetarianNumber: new FormControl(''),
      comment: new FormControl('')
    });


    this.formGroup.valueChanges.subscribe((value)=> console.log(value))
  }

  get isComing(){
    return this.formGroup && this.formGroup.get('isComing')?.value;
  }

  submit(){
      var formData: any = new FormData();
      formData.append("name", this.formGroup.get("name")?.value);
      formData.append("isComing", this.formGroup.get("isComing")?.value);
      formData.append("beefNumber", this.formGroup.get("beefNumber")?.value);
      formData.append("fishNumber", this.formGroup.get("fishNumber")?.value);

      formData.append("vegetarianNumber", this.formGroup.get("vegetarianNumber")?.value);
      formData.append("comment", this.formGroup.get("comment")?.value);
      this.isLoading = true; 
      /* this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits */
      this.http.post("https://script.google.com/macros/s/AKfycbznTfq4C4_suurPLBZSaPUt5tA34_XVMJnVS596LWIEPJdMma_fwj8_ypVGN08xSfYWBQ/exec", formData).subscribe(
        (response) => {
          this.isLoading = false
          /* // choose the response message
          if (response["result"] == "success") {
            this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          } else {
            this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          }
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button */
          this.isFormVisible = false;
          console.log(response);
        },
        (error) => {
          this.isLoading = false
          /* this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button */
          console.log(error);
        }
      );
    
  }

}
