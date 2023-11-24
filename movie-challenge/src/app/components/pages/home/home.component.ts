import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  currentPage: number = 1;
  totalPages: number = 0;
  movies: any[] = [];
  genres: any[] = [];
  orderBy: any[] = [];
  moviesByGenre: any[] = [];
  selectedGenre?: string;
  selectedOrder: string = 'popularity.desc';
  keyWord?: string;  

  constructor(
    private readonly _SERVICE: TmdbService,
    private readonly _ROUTE: ActivatedRoute,
  ){}
  
  ngOnInit(): void {
    const queryParams = this._ROUTE.snapshot.queryParamMap;
    const genreParam = queryParams.get('genre');
    const orderParam = queryParams.get('order');
    const pageNumberParam = queryParams.get('pageNumber');
  
    if (genreParam !== null) {
      this.selectedGenre = genreParam.toString();
    }
  
    if (orderParam !== null) {
      this.selectedOrder = orderParam.toString();
    }
  
    if (pageNumberParam !== null) {
      const parsedPageNumber = parseInt(pageNumberParam, 10);
      this.currentPage = isNaN(parsedPageNumber) ? 1 : parsedPageNumber;
    }
    this.loadMovies();
    this.genreList();
}

onPageChanged(page: number){
  // console.log(page);
  this.currentPage = page;
  this.loadMovies();
}

loadMovies() {
  const filterGenre = this.selectedGenre !== '0' ? this.selectedGenre : undefined;
  const searchBy = this.keyWord ? this.keyWord : undefined;
   this._SERVICE.getMoviesByPages(this.currentPage, filterGenre, this.selectedOrder, searchBy).subscribe(
    {
      next: (data: any) => {
        console.log("Load movies: ", data);
        this.totalPages = data.total_pages;
        this.movies = data.results;
      }
    });
}

loadMoviesWithGenre() {
  this._SERVICE.getMoviesByPages(this.currentPage, this.selectedGenre).subscribe(
    {
      next: (data: any) => {
        console.log("Load With Genre: ", data);
        this.totalPages = data.total_pages;
        this.movies = data.results;
        console.log(this.currentPage, this.selectedGenre);
      }
    });
}

genreList() {
  this._SERVICE.getMoviesByGenre().subscribe({
    next: (data: any) => {
      this.genres = data.genres;
      console.log('Movie List: ', data)
    }
  });
}

listMoviesOrder(sortBy: string) {
  sortBy = sortBy || 'popularity.desc';
  this._SERVICE.getMoviesByOrder(sortBy).subscribe({
    next: (data: any) => {
      console.log('Order: ', data);
      this.orderBy = data.results;
    }
  });
}


filterChanged(event: { genreId: string, orderBy: string, keyWord: string }){
  console.log("Filter Change Home: ", event);
  const { genreId, orderBy, keyWord } = event;
  this.selectedGenre = genreId;
  this.selectedOrder = orderBy;
  this.keyWord = keyWord;
  this.loadMovies();
}

moviesWithGenre(genreId: string){
  this._SERVICE.getSelectedGenre(genreId).subscribe({
    next: (data:any)=>{
      this.moviesByGenre = data.results;
      console.log("Filmes filtrados por genero:", data);
      this.totalPages = data.total_pages;
      this.movies = data.results; 
    }
  })
}

}




// selectGener(event:any){
//   console.log(event);
//   this.selectedGenre = Number(event);
//   this.moviesWhithGenre(Number(event)); 
// }

// loadMovies(genreId?: string) {
//   this._SERVICE.getMoviesByPages(this.currentPage, genreId).subscribe({
//     next: (data: any) => {
//       this.totalPages = data.total_pages;
//       this.movies = data.results;
//     }
//   });
// }

// loadMovies(){
//   this._SERVICE.getMoviesByPages(this.currentPage).subscribe(
//     {
//       next: (data: any) => {
//       console.log(data);
//       this.totalPages = data.total_pages;
//       this.movies = data.results;
//       }
//     });
// }

// genreList(){
//   this._SERVICE.getMoviesByGenre().subscribe({
//       next: (data: any) => {
//         this.genres = data.genres;
//         console.log('Genres: ', data);
//       }
//     })
// }
// sortBy(sortBy: string){
//   this._SERVICE.getMoviesByOrder(sortBy).subscribe({
//       next: (data: any) => {
//         this.orders = data.results;
//         console.log('Order: ', data.sort_by);
//       }
//     })
// }