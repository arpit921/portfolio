import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.css']
})
export class AchievementsComponent implements OnInit {
  achievements = [
    {
      title: '4 Star Coder at CodeChef',
      description: 'Achieved 4-star rating with 1929 points on CodeChef platform',
      icon: '⭐',
      meta: 'Rating: 1929'
    },
    {
      title: 'Guardian at LeetCode',
      description: 'Achieved Guardian status with 2160+ rating on LeetCode',
      icon: '🛡️',
      meta: 'Rating: 2160+'
    },
    {
      title: 'Problem Solving Excellence',
      description: 'Solved 800+ Data Structures and Algorithms problems across multiple platforms',
      icon: '🧩',
      meta: '800+ Problems'
    },
    {
      title: 'Global Contest Rankings',
      description: 'Achieved top global ranks in competitive programming contests',
      icon: '🏆',
      meta: 'Global Rank 16, 39, 120'
    },
    {
      title: 'NPTEL Top Performer',
      description: 'Top 5% performer in Introduction to Internet of Things course',
      icon: '📚',
      meta: 'Top 5%'
    },
    {
      title: 'Trading Challenge Winner',
      description: 'Ranked in top 0.6% among 69,000+ participants in Shri Ram Trading Challenge 2023',
      icon: '📈',
      meta: 'Top 0.6%'
    }
  ];

  certifications = [
    {
      name: 'Competitive Programming',
      provider: 'NPTEL',
      description: 'Advanced concepts in competitive programming including algorithms, data structures, and problem-solving techniques'
    },
    {
      name: 'Introduction To Internet Of Things',
      provider: 'NPTEL',
      description: 'Comprehensive understanding of IoT concepts, protocols, and applications in modern technology stack'
    }
  ];

  positions = [
    {
      role: 'STEM Expert',
      organization: 'Numerade',
      period: 'Jul 2022 - Oct 2022',
      responsibilities: [
        'Demonstrated expertise in Data Structures and Algorithms as a STEM expert',
        'Acquired proficiency in leveraging technology platforms and digital tools',
        'Delivered engaging and interactive STEM content to students'
      ]
    },
    {
      role: 'Event Management Team',
      organization: 'Moksha Innovision 2023',
      period: 'Mar 2023',
      responsibilities: [
        'Played a key role in planning, organizing, and executing a Fitness Fest in collaboration with Decathlon',
        'Coordinated over 20+ games and activities',
        'Ensured a seamless experience for 1000+ participants'
      ]
    }
  ];

  ngOnInit() {}
}