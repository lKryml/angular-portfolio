import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Akram Mohammad - Resume');
  }
}
