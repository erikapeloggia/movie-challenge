import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private readonly _URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&api_key=300f3845a1d310ace9143d4e55d6dfa6&page='
  
  constructor(
    private readonly _HTTP: HttpClient
  ) { }

  getMoviesByPages(page: number): Observable<any> {
    return this._HTTP.get(`${this._URL}${page}`)
  }
}
