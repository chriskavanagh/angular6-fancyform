import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FancyFormComponent } from './fancy-form/fancy-form.component';
import { GetrequestComponent } from './getrequest/getrequest.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { FireComponent } from './fire/fire.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  { path: 'get-requests', component: GetrequestComponent },
  { path: 'fancy-form', component: FancyFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'fire', component: FireComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'parent', component: ParentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }

  