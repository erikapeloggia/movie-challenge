import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private readonly _KEY = '300f3845a1d310ace9143d4e55d6dfa6'
  private readonly _BASE_URL = 'https://api.themoviedb.org/3/'
  private readonly _APPEND = `?include_adult=false&api_key=${this._KEY}&page=`
  private readonly _SORT = `&sort_by=`
  private readonly _DISCOVER = `${this._BASE_URL}discover/movie${this._APPEND}` 
  private readonly _ID = `${this._BASE_URL}movie`
  private readonly _GENRES = `${this._BASE_URL}genre/movie/list`
  private readonly _SELECTGENRE = `&with_genres=`
  private readonly _SEARCH = `&with_keywords=`

  
  constructor(
    private readonly _HTTP: HttpClient
  ) { }


  getMoviesByPages(page: number, genreId?: string, orderBy?: string, keyWord?: string): Observable<any> {
    console.log(`${this._DISCOVER}${page}${genreId?this._SELECTGENRE+`${genreId}`:``}${orderBy?this._SORT+`${orderBy}`:``}${keyWord?this._SEARCH+`${keyWord}`:``}`)
    return this._HTTP.get(`${this._DISCOVER}${page}${genreId?this._SELECTGENRE+`${genreId}`:``}${orderBy?this._SORT+`${orderBy}`:``}${keyWord?this._SEARCH+`${keyWord}`:``}`)
  }

  getMoviesById(id: number): Observable<any> {
    console.log(`${this._ID}/${id}?${this._KEY}`);
    return this._HTTP.get(`${this._ID}/${id}?api_key=${this._KEY}`);
  }

  getMoviesByGenre(): Observable<any> {
    console.log(`${this._GENRES}?${this._KEY}`);
    return this._HTTP.get(`${this._GENRES}?api_key=${this._KEY}`)
  }

  getSelectedGenre(genreId: string): Observable<any> {
    return this._HTTP.get(`${this._SELECTGENRE}&api_key=${this._KEY}&with_genres=${genreId}`)
  }

  getMoviesByOrder(sortBy: string): Observable<any> {
    return this._HTTP.get(`${this._SORT}?api_key=${this._KEY}&sort_by=${sortBy}`)
  }

  getMoviesBySearch(value: string): Observable<any> {
    return this._HTTP.get(`${this._SEARCH}?api_key=${this._KEY}&search=${value}`)
  }
}
