import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-books-detail-page',
  templateUrl: './books-detail-page.component.html',
  styleUrls: ['./books-detail-page.component.css']
})
export class BooksDetailPageComponent implements OnInit {

  book : any;
  id:any;
  constructor(private bookService: DataService, private activatedRouteService: ActivatedRoute) { 
    this.id = this.activatedRouteService.snapshot.paramMap.get('id');
    this.bookService.getBookById(this.id).subscribe((response:any) =>{
      this.book = response;
    })
  }


  ngOnInit(): void {
  }

}
