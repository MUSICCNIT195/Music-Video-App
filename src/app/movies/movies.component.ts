import { Component, NgModule, OnInit } from '@angular/core';
import  *  as  productData  from  'src/assets/movies.json';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule, HttpParams } from '@angular/common/http'
import { SearchMoviesComponent } from '../search-movies/search-movies.component';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})



 export class MoviesComponent implements OnInit {
  https: any;
 


  

 
 // constructor() { }

 
  ngOnInit(): void {
    
    
  }
 
}
