import { Component, OnInit } from '@angular/core';
import  *  as  productData  from  'src/assets/movies.json';
@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements OnInit {
  movies:  any  = (productData as  any).default;
  movieslistJson:  any;
  constructor() {
    //json parse
    this.movieslistJson = (productData as  any).default;
   }

  ngOnInit(): void {
    console.log(this.movies);
  }
  ngOnSubmit(): void {

  }

}
