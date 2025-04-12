import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  selectedMenu: string = 'all'; 

  selectMenu(menu: string) {
    this.selectedMenu = menu; 
  }
  currentSlideIndex: number = 0; 
  autoSlideInterval: any;
  slides = [
    {
      title: 'What They\'re Talking About',
      subtitle: 'Vyomn Projeccts!',
      description: 'Vyomn Projects turned our house into a dream home. From the initial design to the final touches, they were with us every step of the way. The attention to detail and professionalism were outstanding.',
      name: 'Rajesh Singh',
      location: 'DLF Phase 1, Gurugram',
    },
    {
      title: 'Another Great Experience',
      subtitle: 'Vyomn Projeccts!',
      description: 'The team at Vyomn Projects helped us redesign our office space, and the results were beyond expectations. They created a modern, functional space that perfectly represents our company’s culture. We couldn’t be happier!',
      name: 'Kulbeer Singh',
      location: 'Techno Info, Bahadurgarh',
    },
    {
      title: 'Beautiful Memories',
      subtitle: 'Vyomn Projeccts!',
      description: 'We approached Vyomn Projects for a warehouse construction project, and their team delivered on time and within budget. The structure is efficient, durable, and exactly what we needed for our operations.',
      name: 'Rajesh Singh, Operations Manager',
      location: 'Pride Logistics, Sector17 Bahadurgarh',
    }
  ];

  ngOnInit() {

    this.startAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  // Combine name and location for display
  getNameWithLocation() {
    const currentSlide = this.slides[this.currentSlideIndex];
    return `${currentSlide.name} , ${currentSlide.location}`;
  }
}
