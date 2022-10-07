import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: DataService) { }

  ngOnInit(): void {
  }

  onclickLogout(){
    sessionStorage.setItem('flag','1');
    this.auth.logout();
  }

}
