import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  books: any[] = [];
  catId : any;

  constructor(private productDataService: DataService, private activateRouteService: ActivatedRoute) { 
    this.catId = this.activateRouteService.snapshot.paramMap.get('catId');
    this.productDataService.getBooksByCatID(this.catId).subscribe((response:any) =>{
      this.books = response;
    })
  }

  ngOnInit(): void {
  }

}
