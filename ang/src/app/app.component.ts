import { Component } from '@angular/core';
import { TweenMax,TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  that: any;

  constructor() { }

  ngOnInit() {
    let tl = this.that = new TimelineMax({repeat:-1});
    tl.to(".h", 1, {x:100});
    tl.play();
  }
}
