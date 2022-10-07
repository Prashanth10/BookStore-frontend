import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-books-detail-page',
  templateUrl: './books-detail-page.component.html',
  styleUrls: ['./books-detail-page.component.css']
})
export class BooksDetailPageComponent implements OnInit {

  book : any;
  id:any;
  constructor(private bookService: DataService, private router: Router, private activatedRouteService: ActivatedRoute) { 
    this.id = this.activatedRouteService.snapshot.paramMap.get('id');
    this.bookService.getBookById(this.id).subscribe((response:any) =>{
      this.book = response;
    })
  }


  ngOnInit(): void {
  }

  onClickHandler(flag:any,id:any){
    if(flag==1){
      let data = {
        'User_id': localStorage.getItem('user'),
        'Book_id':id
      }
      this.bookService.addToWishlist(data).subscribe((response:any) =>{
        this.book = response;
      })
    }else{
      let data = {
        'User_id': localStorage.getItem('user'),
        'Book_id':id,
        'Quantity':1
      }
      this.bookService.addToCart(data).subscribe((response:any) =>{
        this.book = response;
      })
    }
  }

}
