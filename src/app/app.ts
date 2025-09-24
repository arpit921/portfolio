import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';


import { HeaderComponent } from './header/header';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from './about/about';
import { ProjectsComponent } from './projects/projects';
import { SkillsComponent } from './skills/skills';
import { AchievementsComponent } from './achievements/achievements';
import { ContactComponent } from './contact/contact';
import { FooterComponent } from './footer/footer';

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
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}