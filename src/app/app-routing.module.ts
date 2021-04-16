import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  HttpClientModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
