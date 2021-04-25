import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { concat } from 'rxjs';

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
  jsonfile: any;

  baseUrl = 'https://api.themoviedb.org/3/search/movie?';

  apikey2 = '0a4252617bfe9d39fa9d115728b16c43'; //api key will be fixed for this assignment
  searchfor = '';
  fullUrl = '';
  moviesList: any = [];
  imageList: any = [];
  baseImageUrl = 'https://image.tmdb.org/t/p/w200/';

  movieId: any;
  movieIdBaseUrl = 'https://api.themoviedb.org/3/movie/';
  movieIdList: any = [];
  youtubeIdJsonArray: any = [];
  movieIdjsonfile: any;
  youtubeIdKeysList: any;

  constructor(private http: HttpClient, private myformBuilder: FormBuilder) {
    this.emailForm = this.myformBuilder.group({
      name: ['', Validators.required],
      //searchFor: ['', Validators.required],
    });
  }

  //https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

  //Final url: https://api.themoviedb.org/3/search/movie?query=James%20bond&api_key=0a4252617bfe9d39fa9d115728b16c43
  // finalUrl=BaseUrl + "&" + "query" & key & api_key= & key;
  /**
   * name
   */

  ngOnInit(): void {}

  doGET(value) {
    return this.http.get<Movies[]>(value);
  }

  onSubmit() {
    // console.log('Full url: ' + this.fullUrl);

    this.submitted = true;
    if (this.emailForm.invalid) {
      return; /* no code will be executed after this point */
    }
    this.ok = true;
    this.searchfor = this.emailForm.get('name').value;
    console.log('On submit Method');
    console.log(this.createUrlMovie(this.searchfor));
    this.jsonfile = this.doGET(this.createUrlMovie(this.searchfor));
    this.parseJsonResponse(this.jsonfile);

    //get json file for youtube trailer keys
  }

  //after they submit the word search
  createUrlMovie(ss) {
    const asString = encodeURIComponent(ss).toString();
    //console.log("search term: " + this.searchFor);
    let search = new URLSearchParams();
    search.set('title', this.searchfor);
    //console.log("URL" + this.baseUrl + 'query=' + asString + '&api_key=' + this.apikey2);
    return this.baseUrl + 'query=' + asString + '&api_key=' + this.apikey2;
  }

  //get the movie Id for youtube iframe
  createUrlMovieId(movieId) {
    //https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
    return this.movieIdBaseUrl + movieId + '/videos?&api_key=' + this.apikey2;
  }

  parseJsonResponse(httpResponse: any) {
    httpResponse.subscribe((response) => {
      this.moviesList = response.results;
      console.log('parseJsonResponse ', this.moviesList);

      for (var i = 0; i < this.moviesList.length; i++) {
        //console.log(this.moviesList[i].poster_path);
        this.imageList[i] = this.baseImageUrl + this.moviesList[i].poster_path;
        this.movieIdList[i] = this.createUrlMovieId(this.moviesList[i].id);
        this.grabYoutubeIds(this.http.get(this.movieIdList[i]));
      }
      console.log('Poster Path ', this.imageList);
      console.log('Movie ids ', this.movieIdList);
    });
  }

  grabYoutubeIds(httpResponse: any) {
    httpResponse.subscribe((response) => {
      this.youtubeIdKeysList = response.results;

      for (var i = 0; i < this.youtubeIdKeysList.length; i++) {
        this.youtubeIdKeysList[i] = this.youtubeIdKeysList.key;
        console.log('Youtube keys ' , this.youtubeIdKeysList[i]);
      }
    });
  }
}

export interface Movies {
  title: string;
  id: BigInteger;
  poster_path: string;
  key: string;
}
