import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

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
