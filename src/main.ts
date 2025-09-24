import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';


import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { ProjectsComponent } from './components/projects.component';
import { SkillsComponent } from './components/skills.component';
import { AchievementsComponent } from './components/achievements.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    AchievementsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="app">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-projects></app-projects>
        <app-skills></app-skills>
        <app-achievements></app-achievements>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    main {
      flex: 1;
    }
    
    
    :global(html) {
      scroll-behavior: smooth;
    }
    
    
    :global([id]) {
      scroll-margin-top: 80px;
    }
    
  
    :global(::-webkit-scrollbar) {
      width: 8px;
    }
    
    :global(::-webkit-scrollbar-track) {
      background: var(--neutral-100);
    }
    
    :global(::-webkit-scrollbar-thumb) {
      background: var(--primary-400);
      border-radius: 4px;
    }
    
    :global(::-webkit-scrollbar-thumb:hover) {
      background: var(--primary-600);
    }
    
   
    :global(.fade-in-up) {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    
    :global(*:focus-visible) {
      outline: 2px solid var(--primary-600);
      outline-offset: 2px;
    }
  `]
})
export class App {}

bootstrapApplication(App);