import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { FancyFormComponent } from './fancy-form/fancy-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetrequestComponent } from './getrequest/getrequest.component';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FancyFormComponent,
    GetrequestComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
