import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onClickHandler(method:any,query:any){
    if(method==1){
      this.router.navigate(
        ['/books'],
        { queryParams: { by: 'ISBN', query: query }}
      );
    }else{
      this.router.navigate(
        ['/books'],
        { queryParams: { by: 'Title', query: query }}
      );
    }
  }

}
