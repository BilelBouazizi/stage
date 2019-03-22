import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adz-app-result',
  templateUrl: './adz-result.component.html',
  styleUrls: ['./adz-result.component.css']
})
export class AdzResultComponent implements OnInit {

  bookName: string;

  result: Object = new Object();

  constructor(private bookService : BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
        this.bookName = params.get('bookname')
    });
    this.bookService.handleSearch(this.bookName).subscribe(res => {
      this.result = res;
      console.log(this.result)
    }, error => {
      console.log(error);
    });
  }

}
