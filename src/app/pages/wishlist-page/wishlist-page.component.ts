import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {

  books: any[] = [];

  constructor(private productDataService: DataService, private activateRouteService: ActivatedRoute) { 
    let userId = localStorage.getItem('user');
    this.productDataService.getWishlistByUserid(userId).subscribe((response:any) =>{
      this.books = response;
    })
  }

  ngOnInit(): void {
  }

}
