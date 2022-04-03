import { Component, OnInit } from '@angular/core';
import { Project } from 'src/modules/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor() { }

  projects: Array<Project> = [
    {
      title: "Quiz",
      description: "Angular",
      content: "It\'s one of my first Angular projects. Simple Quiz done by Angular with adding but without database. In future I want to expand this with deleting, adding and overviewing current questions. I'm also thinking about adding new options of answer, like ichoose answer or input text.",
      done: true,
      url: "https://github.com/danielpaluch/Angular_Quiz"
    },
    {
      title: "To-do list",
      description: "Angular",
      content: "It\'s simple todo list. Made with Material UI. In future it will base on database.",
      done: true,
      url: "https://github.com/danielpaluch/Angular_TodoList"
    },
    {
      title: "TicTacToe",
      description: "Angular",
      content: "TicTacToe with basic mechanics. I've spend more time to make it look good and without any kind of bugs or errors. You are allowed to play in 2-player and AI mode",
      done: true,
      url: "https://github.com/danielpaluch/Angular_KolkoKrzyzyk"
    },
    {
      title: "KeyFinder",
      description: "C#",
      content: "Simplic KeyFinder in linked file, shows how much the key is used and in which lines it occurs.",
      done: true,
      url: "https://github.com/danielpaluch/C-_KeyFinder"
    },
    {
      title: "Blog with Log-In",
      description: "Angular, Firebase",
      content: "It\'s not done yet. I\'m still working on it, while learning databases and how to make users their own accounts.",
      done: false,
    },
  ]

  ngOnInit(): void {
  }

}
