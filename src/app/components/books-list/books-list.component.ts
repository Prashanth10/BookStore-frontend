import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: any[] = [];
  // catId : any;

  constructor(private productDataService: DataService, private activateRouteService: ActivatedRoute) { 
    if (this.activateRouteService.snapshot.queryParams['by']){
      this.activateRouteService.queryParamMap
        .subscribe((params) => {
          if(params.get('by')=='ISBN'){
            this.productDataService.getBooksByISBN(params.get('query')).subscribe((response:any) =>{
              this.books = response;
            })
          }else{
            this.productDataService.getBooksByTitle('%'+params.get('query')+'%').subscribe((response:any) =>{
              this.books = response;
            })
          }
        }
      );
    }else{
      this.productDataService.getBooks().subscribe((response:any) =>{
        this.books = response;
      })
    }
  }

  ngOnInit(): void {
  }

}
