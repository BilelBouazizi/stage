import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdzSearchComponent } from './adz-search/adz-search.component';
import { BookService } from './services/book.service';
import { AdzResultComponent } from './adz-result/adz-result.component';
import { AdzDisplayComponent } from './adz-display/adz-display.component'

@NgModule({
  declarations: [
    AppComponent,
    AdzSearchComponent,
    AdzResultComponent,
    AdzDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
