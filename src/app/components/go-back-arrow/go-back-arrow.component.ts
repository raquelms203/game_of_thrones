import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-back-arrow',
  templateUrl: './go-back-arrow.component.html',
  styleUrls: ['./go-back-arrow.component.css']
})
export class GoBackArrowComponent {

  constructor(private route: Router) {}

  goHome() {
    this.route.navigate(['/']);
  }

}
