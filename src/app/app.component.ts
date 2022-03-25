import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  width = true;
  constructor(private breakpointObserver: BreakpointObserver,) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
          this.width = true; 
          console.log(this.width); 
      } else {
          this.width = false;
          console.log(this.width);
      }
    });
  }
}

