import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'http://localhost:63709/api'

  constructor(private http: HttpClient) { }

  getCategory(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/category`);
  }

  getBooks(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/book`);
  }

  getBooksByCatID(catId: any): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/book?by=catId&query=${catId}`);
  }

  getBooksByISBN(isbn: any): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/book?by=isbn&query=${isbn}`);
  }

  getBooksByTitle(name: any): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/book?by=name&query=${name}`);
  }

  getBookById(Id: any): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/book/${Id}`);
  }

  createBook(data: any): Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/book`, data)
  }

  login(data:any): Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/user/auth`,data);
  }

  logout(){
    localStorage.clear();
  }
  
  checkToken() : boolean {
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }
}
