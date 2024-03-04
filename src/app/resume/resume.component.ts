import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  isOpenWorkExperience: boolean = false;
  isOpenEducation: boolean = false;
  isOpenCertifications: boolean = false;
  isOpenSkills: boolean = false;
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Akram Mohammad - Resume');
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/resume.pdf');
    link.setAttribute('download', 'resume.pdf');
    link.click();
    link.remove();
  }
}
