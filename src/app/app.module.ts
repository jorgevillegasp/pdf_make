import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedPdfComponent } from './shared-pdf/shared-pdf.component';
import { SharedPdf2Component } from './shared-pdf2/shared-pdf2.component';


@NgModule({
  declarations: [
    AppComponent,
    SharedPdfComponent,
    SharedPdf2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
