import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Akram Mohammad - Portfolio');
  }
}
