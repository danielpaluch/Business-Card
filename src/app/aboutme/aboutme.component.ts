import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/modules/aboutme';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent implements OnInit {

  textIntroduction = 'Firstly, I want to thank you for checking this site! It really matters for me for future possible work, even in your company! Currently, Im one-year student of IT at the University of Economics. I\'ve always wondered how applications and webs are done from behind. That\'s why im trying to get better and better.';
  constructor() { }


  MyAims : Array<AboutMe> = [
    {
      title: 'Present', 
      content:"Today I'm trying to get with Angular and .NET. I develop myself by available courses on youtube and setting my own goals, which educates me everyday. I'm trying to teach myself a daily routine to spend my time on coding and learning new things. Every week I want to sum up what I’ve taught myself and start building a new project and try to finish it in a month, depending on its difficulty. Also I'm looking everyday for an internship, practice or job as a Frontend or .NET developer.",
      icon:"perm_identity"
    },
    {
      title: 'My goals', 
      content:"I've always been a careerist. I just want to wake up one day to a big project, even as a leader in one of the biggest companies in the world. Nowadays I'm trying to focus on Frontend. In the future I'm ready to learn Backend and become a Fullstack developer. On top of that, I'm trying to understand .NET, especially ASP.NET. Apart from studying, I always wanted to work in a group as a programist, I feel like in this type of work we can teach each other way faster and make bigger projects.",
      icon:"flag"
    },
    {
      title: 'Education', 
      content:"I've finished technical school where I was coding in C++, JavaScript and PHP mostly. Today I'm at daily studies and learning C# and SQL on them. In my free time I'm aiming to learn Angular (rxJS, NgRX), Material UI, Flutter and then focus on backend development. Also I’ve decided to start learning .NET (ASP.NET) and NoSQL databases. I’m using road-maps to help my self-taught method. I’ve also started doing a driver’s license to increase my range of job search.",
      icon:"school"
    },
    {
      title: 'Hobbies', 
      content:"I like to spend my free time with friends. I’ve always liked to interact with people. Sport is really close to me, it really helps to get a fresh head. At home besides coding I'm into some computer games, reading fantasy books and watching series. Except that I really like to play advanced board games.",
      icon:"interests"
    }
  ]

  ngOnInit(): void {
  }

}
