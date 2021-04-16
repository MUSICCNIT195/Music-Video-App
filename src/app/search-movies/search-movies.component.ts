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

  baseUrl: string = 'https://api.themoviedb.org/3/search/movie?';

  key: string = '0a4252617bfe9d39fa9d115728b16c43'; //api key will be fixed for this assignment
  searchFor: string;
  fullUrl: string = '';
  constructor(private http: HttpClient, private myformBuilder: FormBuilder) {
    this.emailForm = this.myformBuilder.group({
      name: ['', Validators.required],
      searchFor: ['', Validators.required],
    });
  }

  //Final url: https://api.themoviedb.org/3/search/movie?query=James%20bond&api_key=0a4252617bfe9d39fa9d115728b16c43
  // finalUrl=BaseUrl + "&" + "query" & key & api_key= & key;
  /**
   * name
   */

  ngOnInit(): void {}
  doGET() {
    console.log('GET');
    this.searchFor=this.emailForm.get('name').value;
    console.log("search term: " + this.searchFor);
    let search = new URLSearchParams();
    search.set('title', this.searchFor);
    
      const asString =encodeURIComponent(this.searchFor).toString();;
      //this.searchFor=asString;
  
      console.log("encoded searh term: " +asString);
      this.fullUrl =
      this.baseUrl + 'query=' + asString + '&api_key=' + this.key;

      console.log('Full url: ' + this.fullUrl);
    console.log(
      this.http.get(this.fullUrl ).subscribe((res) => console.log(res))
    );
    
  }

  onSubmit() {
   // console.log('Full url: ' + this.fullUrl);

    this.submitted = true;
    if (this.emailForm.invalid) {
      return; /* no code will be executed after this point */
    }
    this.ok = true;
    this.searchFor = this.emailForm.get('name').value();
  }
}
