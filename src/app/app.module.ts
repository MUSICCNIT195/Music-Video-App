import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { SafePipe } from './safe-pipe/safe-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MoviesComponent,
    ContactComponent,
    SearchMoviesComponent,
    MovieTableComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports: [SearchMoviesComponent, MovieTableComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
