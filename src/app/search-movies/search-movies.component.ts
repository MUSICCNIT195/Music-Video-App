import { HttpParams } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
})
export class SearchMoviesComponent implements OnInit {
  shortDesc: boolean = false;
  emailForm: FormGroup;
  submitted = false;
  ok = false;
  name: any;

  baseUrl= 'https://api.themoviedb.org/3/search/movie?';

  apikey2 = '0a4252617bfe9d39fa9d115728b16c43'; //api key will be fixed for this assignment
   searchfor ='';
  fullUrl= '';
  constructor(private http: HttpClient, private myformBuilder: FormBuilder) {
    this.emailForm = this.myformBuilder.group({
      name: ['', Validators.required],
      //searchFor: ['', Validators.required],
    });
   
  }

  //Final url: https://api.themoviedb.org/3/search/movie?query=James%20bond&api_key=0a4252617bfe9d39fa9d115728b16c43
  // finalUrl=BaseUrl + "&" + "query" & key & api_key= & key;
  /**
   * name
   */

  ngOnInit(): void {
    
  }
  doGET(value) {// pass url here 
    
    console.log(
     this.http.get(value ).subscribe((res) => console.log(res))
    );
    
  }

  onSubmit() {
   // console.log('Full url: ' + this.fullUrl);

    this.submitted = true;
    if (this.emailForm.invalid) {
      return; /* no code will be executed after this point */
    }
    this.ok = true;
    this.searchfor = this.emailForm.get('name').value;
    console.log("On submit Method");
    console.log(this.createUrlMovie(this.searchfor));
    this.doGET(this.createUrlMovie(this.searchfor));
  }
  //after they submit the word search
  createUrlMovie(ss){
    const asString =encodeURIComponent(ss).toString();
    //console.log("search term: " + this.searchFor);
    let search = new URLSearchParams();
    search.set('title', this.searchfor);
    //console.log("URL" + this.baseUrl + 'query=' + asString + '&api_key=' + this.apikey2);
     return this.baseUrl + 'query=' + asString + '&api_key=' + this.apikey2;
  }
}
