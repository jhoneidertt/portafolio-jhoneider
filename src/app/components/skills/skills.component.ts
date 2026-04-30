import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-skills', standalone: true, imports: [CommonModule], templateUrl: './skills.component.html', styleUrl: './skills.component.scss' })
export class SkillsComponent {
  groups = [
    { title: 'Backend & Automatización', items: ['Python', 'Flask', 'Django', 'APIs REST', 'Pandas', 'Regex', 'OCR'] },
    { title: 'Bases de datos', items: ['SQL', 'MongoDB', 'DynamoDB', 'Firebase Firestore', 'Redis'] },
    { title: 'Cloud & Herramientas', items: ['AWS S3', 'AWS RDS', 'AWS Lambda', 'Git', 'GitHub', 'Postman'] },
    { title: 'Frontend & Low-code', items: ['Angular', 'HTML', 'CSS', 'PowerApps', 'PowerAutomate'] }
  ];
}
