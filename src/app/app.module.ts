import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { BooksDetailPageComponent } from './pages/books-detail-page/books-detail-page.component';
import { BooksFilterPageComponent } from './pages/books-filter-page/books-filter-page.component';
import { FilterComponent } from './components/filter/filter.component';
import { BooksListComponent } from './components/books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CategoryComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    BooksPageComponent,
    BooksDetailPageComponent,
    BooksFilterPageComponent,
    FilterComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
