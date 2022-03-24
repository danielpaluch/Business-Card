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
    {title: 'Present', content:'Today I\'m trying to get with Angular. I develop myself by available courses on youtube and setting my own goals, which educates me everyday. I\'m trying to teach myself a daily routine to spend my time on coding and learning new things. At this time I\'m exploring Angular Materials and Angular with databases, especially with Firebase.'},
    {title: 'My goals', content:'I\'ve always been a careerist. I just want to wake up one day to a big project, even as a leader in one of the biggest companies in the world. Nowadays I\'m trying to focus on Frontend. In the future I\'m ready to learn Backend and become a Fullstack developer.'},
    {title: 'Education', content:'I\'ve finished technical school where I was coding in C++, JavaScript and PHP mostly. Today I\'m at daily studies and learning C# and SQL on them. In my free time I\'m aiming to learn Angular (rxJS, NgRX), Material UI, Flutter and then focus on backend development.'},
    {title: 'Hobbies', content:'I like to spend my free time with friends. Sport is really close to me, it really helps to get fresh head. At home besides coding I\'m into some computer games, read fantasy books and watching serials.'}
  ]

  ngOnInit(): void {
  }

}
