import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  isMenuOpen = false;
  selectedMenu = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectMenu(menu: string) {
    this.selectedMenu = menu;
    this.isMenuOpen = false;
  }
  ngAfterViewInit() {
    const header = document.getElementById('header');
    const sliderSection = document.getElementById('sliderSection');
    const whoweare = document.getElementById('whoweare');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sliderSection) {
            if (entry.intersectionRatio === 0) {
              header?.classList.remove('header-transparent');
              header?.classList.add('header-colored');
            } else {
              header?.classList.add('header-transparent');
              header?.classList.remove('header-colored');
            }
          } else if (entry.target === whoweare) {
            if (entry.isIntersecting) {
              header?.classList.remove('header-transparent');
              header?.classList.add('header-colored');
            }
          }
        });
      },
      {
        threshold: 1.0,
      }
    );
    if (sliderSection && whoweare) {
      observer.observe(sliderSection);
      observer.observe(whoweare);
    }
  }
}
