import { Component, OnInit } from '@angular/core';
import  *  as  productData  from  'src/assets/movies.json';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})


export class MoviesComponent implements OnInit {
  [x: string]: any;
  BaseUrl = "https://api.themoviedb.org/3/search/movie?";
  key ="0a4252617bfe9d39fa9d115728b16c43";//api key will be fixed for this assignment
  searchFor = "";//the value or Gener,Actor user searchs for movies

  //Final url: https://api.themoviedb.org/3/search/movie?query=James%20bond&api_key=0a4252617bfe9d39fa9d115728b16c43
 // finalUrl=BaseUrl + "&" + "query" & key & api_key= & key;
  /**
   * name
   */

    values_qry = new HttpParams()
   .set('api_key', 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc')
   .set('query', "hello")

  public CompletedUrl() {
    //url create
    console.log('sending request')

    var  searchValue= ((document.getElementById("emailForm") as HTMLInputElement).value);
  
      console.log(searchValue);

    // const url = `https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=xT4uQulxzV39haRFjG&limit=25&offset=0&rating=G&lang=en`;

    const url = 'https://api.giphy.com/v1/gifs/search';

    this.http.get(url, { HttpParams })
      .subscribe(response => {
        console.log(response);
      });
  }



  shortDesc: boolean = false
  movies:  any  = (productData as  any).default;
  emailForm: FormGroup;
  submitted = false;
  ok = false;
 // constructor() { }

  constructor(private myformBuilder: FormBuilder) {
    this.emailForm = this.myformBuilder.group({
      name: [''],
     
    });
  }
  ngOnInit(): void {
    
    console.log(this.movies);
  }
  onSubmit() {
    this.submitted = true;
    if (this.emailForm.invalid) {
      return; /* no code will be executed after this point */
    }
    this.ok = true;
  }
}
interface Movie{
  prodid: Number;
  shortdesc: String;
  longdesc: String;
  unitsize: String;
  unitprice: String;
}

//  form submission


//import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


  