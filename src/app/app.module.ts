import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponentComponent } from './main-page-component/main-page-component.component';
import { WelcomePageComponentComponent } from './welcome-page-component/welcome-page-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbdModalContent, SchedulePageComponent } from './schedule-page/schedule-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RsvpPageComponent } from './rsvp-page/rsvp-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationPageComponent } from './location-page/location-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponentComponent,
    WelcomePageComponentComponent,
    SchedulePageComponent,
    RsvpPageComponent,
    NgbdModalContent,
    LocationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
