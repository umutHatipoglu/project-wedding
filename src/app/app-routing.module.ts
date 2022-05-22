import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponentComponent } from './main-page-component/main-page-component.component';
import { WelcomePageComponentComponent } from './welcome-page-component/welcome-page-component.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponentComponent },
  { path: '', component: WelcomePageComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
