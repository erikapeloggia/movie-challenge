import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent  {
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
      order: 'vote_count.desc', 
      text: 'Most Voted'
    },
    {
      order: 'vote_count.asc', 
      text: 'Least Voted'
    },
  ]

  selectedGenre: string = '0';
  selectedOrder: string = this.orderByList[0].order;
  keyWord: string = '';

  constructor(){}

  optionsChange() {
    this.filterChanged.emit({
      genreId: this.selectedGenre,
      orderBy: this.selectedOrder,
      keyWord: this.keyWord,
    });
  }

}
