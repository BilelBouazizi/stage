import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTxt: string = '';

  constructor(private bookService : BookService) { }

  doSearch(){
    console.log(searchTxt);
    this.bookService.handleSearch(this.searchTxt).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
