import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  books: any[] = [];
  userId: any;

  constructor(private productDataService: DataService, private activateRouteService: ActivatedRoute) { 
    this.userId = localStorage.getItem('user');
    this.productDataService.getWishlistByUserid(this.userId).subscribe((response:any) =>{
      console.log(response)
      for(let index in response){
        let wishId = response[index].Id;
        let bookId = response[index].Book_id;
        var i=0;
        this.productDataService.getBookById(bookId).subscribe((response:any) =>{
          var data = {
            'Id': wishId,
            'bookData': response,
            'Quantity': 1
          }
          this.books[i] = data;
          i+=1;
        })
      }
      console.log(this.books);
    })
  }

  ngOnInit(): void {
  }

  onClickHandler(flag:any,id:any){
    if(flag==1){  //Remove from wishlist
      this.productDataService.removeWishlist(id).subscribe((response:any) =>{
        this.books = response;
      })
    }else{  //add to cart
      let data = {
        'User_id': this.userId,
        'Book_id': id,
        'Quantity': 1
      }
      this.productDataService.addToCart(data).subscribe((response:any) =>{
        this.books = response;
      })
    }
  }
}
