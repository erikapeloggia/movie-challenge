import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsComponent } from './movie-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
// import { of } from 'rxjs';
// import { HttpClientTestingModule } from '@angular/common/http/Testing';


describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let httpTest: HttpTestingController;

  // let discoverMovie: TmdbService;

  // const mockMovie = {
  //   getItem: (id: number) => of({
  //     title: 'Film Title',
  //     poster_path: 'Imagem'

  //   }) 
  // }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieDetailsComponent
      ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA
      ]
      // imports: [
      //   RouterTestingModule,
      //   HttpClientTestingModule
      // ],
      // providers: [
      //   {
      //     provide: discoverMovie,
      //     useValue: mockMovie
      //   }
      // ]
    });
    fixture = TestBed.createComponent(MovieDetailsComponent);
    httpTest = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
