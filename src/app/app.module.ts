import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FancyFormComponent } from './fancy-form/fancy-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetrequestComponent } from './getrequest/getrequest.component';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FireComponent } from './fire/fire.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
//import { NgAisModule } from 'angular-instantsearch';

@NgModule({
  declarations: [
    AppComponent,
    FancyFormComponent,
    GetrequestComponent,
    HomeComponent,
    FireComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    //NgAisModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
