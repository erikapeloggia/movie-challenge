import { Component, Input } from '@angular/core';
// import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent {
  // movies: any[] = [];
  // constructor(
  //   private readonly _SERVICE: TmdbService
  // ){
  //   this._SERVICE.getMovies(1).subscribe({
  //     next: (data:any) => {
  //       console.log(data);
  //       this.movies = data.results;
  //     }
  //   });
  // }

  @Input() movies: any[] = []

  constructor() {
  }
}
