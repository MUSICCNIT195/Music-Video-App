import { Component, OnInit } from '@angular/core';
import  *  as  productData  from  'src/assets/movies.json';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {
  shortDesc: boolean = false
  movies:  any  = (productData as  any).default;
  
  constructor() { }

  ngOnInit(): void {
    
    console.log(this.movies);
  }

}
interface Movie{
  prodid: Number;
  shortdesc: String;
  longdesc: String;
  unitsize: String;
  unitprice: String;
}