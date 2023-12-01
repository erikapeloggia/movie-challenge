import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private Location: Location) {}

  reloadPage() {
      this.Location.replaceState('/');
      window.location.reload();
    };
}
