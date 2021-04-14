import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { MovieTableComponent } from './movie-table/movie-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MoviesComponent,
    ContactComponent,
    SearchMoviesComponent,
    MovieTableComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    SearchMoviesComponent,
    MovieTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
