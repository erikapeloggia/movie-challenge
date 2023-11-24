import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
// import { Subject } from 'rxjs';
// import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent  { //implements OnInit, OnDestroy
  @Input() genres: any[] = [];
  @Input() orderBy: any[] = [];
  @Input() moviesByGenre: any[] = [];
  @Output() filterChanged: EventEmitter<{ genreId: string, orderBy: string, keyWord: string }> = new EventEmitter<{ genreId: string, orderBy: string, keyWord: string }>();

  orderByList: any[] = [
    {
      order: 'popularity.desc', 
      text: 'Most Popular'
    },
    {
      order: 'popularity.asc', 
      text: 'Least Popular'
    },
    {
      order: 'primary_release_date.desc', 
      text: 'Latest Release Date'
    },
    {
      order: 'primary_release_date.asc', 
      text: 'Earliest Release Date'
    },
    {
      order: 'vote_average.desc', 
      text: 'Most Voted'
    },
    {
      order: 'vote_average.asc', 
      text: 'Least Voted'
    },
  ]

  selectedGenre: string = '0';
  selectedOrder: string = this.orderByList[0].order;
  keyWord: string = '';

  // defaultSelectedGenre: string = '0'; // Valor padrão para gênero
  // defaultSelectedOrder: string = this.orderByList[0].order; // Valor padrão para ordenação
  // defaultKeyWord: string = ''; // Campo de pesquisa vazio

  // private searchTerms = new Subject<string>();

  constructor(){
    // this.searchTerms.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged()
    // ).subscribe(term => {
    //   this.keyWord = term;
    //   this.optionsChange();
    // });
  }
  ngOnInit(): void {
    // const storedGenre = localStorage.getItem('selectedGenre');
    // const storedOrder = localStorage.getItem('selectedOrder');
    // const storedKeyWord = localStorage.getItem('keyWord');

    // if (storedGenre !== null) {
    //   this.selectedGenre = storedGenre;
    // }

    // if (storedOrder !== null) {
    //   this.selectedOrder = storedOrder;
    // }

    // if (storedKeyWord !== null) {
    //   this.keyWord = storedKeyWord;
    // }  

    // const storedGenre = localStorage.getItem('selectedGenre');
    // const storedOrder = localStorage.getItem('selectedOrder');
    // const storedKeyWord = localStorage.getItem('keyWord');

    // // Se os valores salvos forem null, restaura os valores padrão
    // this.selectedGenre = storedGenre !== null ? storedGenre : this.defaultSelectedGenre;
    // this.selectedOrder = storedOrder !== null ? storedOrder : this.defaultSelectedOrder;
    // this.keyWord = storedKeyWord !== null ? storedKeyWord : this.defaultKeyWord;
  }
  ngOnDestroy(): void {
    // Armazena os valores dos filtros no localStorage ao destruir o componente
  // localStorage.setItem('selectedGenre', this.selectedGenre);
  // localStorage.setItem('selectedOrder', this.selectedOrder);
  // localStorage.setItem('keyWord', this.keyWord);
  }

  // clearFilters(): void {
  //   // Reseta os filtros para os valores padrão
  //   this.selectedGenre = this.defaultSelectedGenre;
  //   this.selectedOrder = this.defaultSelectedOrder;
  //   this.keyWord = this.defaultKeyWord;

  //   // Emite o evento para notificar sobre a limpeza dos filtros
  //   this.filterChanged.emit({
  //     genreId: this.selectedGenre,
  //     orderBy: this.selectedOrder,
  //     keyWord: this.keyWord,
  //   });
  // }

  // searchMovies(term: string): void {
  //   this.searchTerms.next(term);
  // }

  optionsChange() {
    console.log(`${this.selectedGenre} - ${this.selectedOrder}`);
    this.filterChanged.emit({
      genreId: this.selectedGenre,
      orderBy: this.selectedOrder,
      keyWord: this.keyWord,
    });
  }

}
