import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksDetailPageComponent } from './pages/books-detail-page/books-detail-page.component';
import { BooksFilterPageComponent } from './pages/books-filter-page/books-filter-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'books', component: BooksFilterPageComponent},
  {path: 'books/:catId', component: BooksPageComponent},
  {path: 'books/details/:id', component: BooksDetailPageComponent},
  {path: 'wishlist', component: WishlistPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
