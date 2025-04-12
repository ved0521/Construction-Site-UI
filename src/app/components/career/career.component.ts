import { Component} from '@angular/core';

@Component({
  selector: 'app-career',
  standalone: false, 
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',

})
export class CareerComponent {
  showJobOpenings: boolean = false;

  showAndScrollToJobOpenings(): void {
    this.showJobOpenings = true;
    setTimeout(() => {
      const jobOpenings = document.getElementById('job-openings');
      if (jobOpenings) {
        jobOpenings.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
