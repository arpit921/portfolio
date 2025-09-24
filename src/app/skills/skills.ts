import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent implements OnInit {
  skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        {
          name: 'C++',
          description: 'Competitive programming, DSA',
          icon: '⚡',
          level: 90
        },
        {
          name: 'Python',
          description: 'AI/ML, Data Analysis',
          icon: '🐍',
          level: 85
        },
        {
          name: 'JavaScript',
          description: 'Full-stack development',
          icon: '🟨',
          level: 88
        },
        {
          name: 'SQL',
          description: 'Database management',
          icon: '🗄️',
          level: 80
        }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        {
          name: 'React.js',
          description: 'Frontend development',
          icon: '⚛️',
          level: 90
        },
        {
          name: 'Node.js',
          description: 'Backend development',
          icon: '🟢',
          level: 85
        },
        {
          name: 'Express.js',
          description: 'Web framework',
          icon: '🚀',
          level: 85
        },
        {
          name: 'MongoDB',
          description: 'NoSQL database',
          icon: '🍃',
          level: 82
        }
      ]
    }
  ];

  tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Git', icon: '📝' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Terminal', icon: '⌨️' },
    { name: 'Postman', icon: '📮' },
    { name: 'Docker', icon: '🐳' }
  ];

  ngOnInit() {}
}