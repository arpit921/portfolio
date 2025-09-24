import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'EdTechWorld – Full-Stack Ed-Tech Platform',
      period: 'Apr 2025 - Present',
      description: 'A comprehensive e-learning platform built with MERN stack that enables secure course creation, enrollment, and ratings for both students and instructors.',
      features: [
        'Scalable e-learning platform with user authentication',
        'REST APIs with JWT and OTP-based authentication',
        'Integrated payment processing with Razorpay',
        'Cloud-based media storage with Cloudinary',
        'Responsive frontend with React.js and Redux',
        'Modern UI design with TailwindCSS'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'TailwindCSS', 'JWT', 'Razorpay', 'Cloudinary'],
      metrics: null
    },
    {
      title: 'Intelligent Crime Detection System',
      period: 'Aug 2023 - Feb 2024',
      description: 'An AI-powered system that analyzes surveillance videos to detect criminal activities in real-time using advanced deep learning techniques.',
      features: [
        'Real-time video analysis for crime detection',
        '3D Convolutional Neural Network for feature extraction',
        'LSTM layers for sequential data processing',
        'UCF-Crime dataset integration',
        'Spatial and temporal pattern recognition',
        'High accuracy anomaly detection'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'LSTM', 'Deep Learning'],
      metrics: [
        { value: '93%', label: 'Training Accuracy' },
        { value: '90%', label: 'Validation Accuracy' },
        { value: '89%', label: 'Testing Accuracy' }
      ]
    }
  ];

  ngOnInit() {}
}