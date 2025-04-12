import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedMenu: string = 'all'; // Default selection

  // Method to change the selected menu
  selectMenu(menu: string) {
    this.selectedMenu = menu;
  }
}
