import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BookService } from './services/book.service';
import { ResultComponent } from './result/result.component';
import { AdzDisplayComponent } from './adz-display/adz-display.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
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
