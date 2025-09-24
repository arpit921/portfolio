import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit {
  ngOnInit() {}

  downloadResume(event: Event) {
    event.preventDefault();
    // In a real application, you would link to an actual resume file
    alert('Resume download functionality would be implemented here');
  }
}