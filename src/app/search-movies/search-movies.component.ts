import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  shortDesc: boolean = false
  emailForm: FormGroup;
  submitted = false;
  ok = false;
  name: any;
  values_qry: HttpParams;
searchFor:any;
fullUrl:any;
  constructor(private myformBuilder: FormBuilder) {
    this.emailForm = this.myformBuilder.group({
      name: [''],
     searchFor:['']
    });
  }

  BaseUrl = "https://api.themoviedb.org/3/search/movie?";
  key ="0a4252617bfe9d39fa9d115728b16c43";//api key will be fixed for this assignment
 

  //Final url: https://api.themoviedb.org/3/search/movie?query=James%20bond&api_key=0a4252617bfe9d39fa9d115728b16c43
 // finalUrl=BaseUrl + "&" + "query" & key & api_key= & key;
  /**
   * name
   */


    



  ngOnInit(): void {
   
   
  }
  onSubmit() {
    this.fullUrl=this.BaseUrl + 'api_key='+this.key + 'query='+this.searchFor;

    this.submitted = true;
    if (this.emailForm.invalid) {
      return; /* no code will be executed after this point */
    }
    this.ok = true; 
    console.log("search word: " + this.emailForm.get('name').value) + "Full url"+ this.fullUrl;
  }

}
