import { Component, OnInit } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome-parent',
  templateUrl: './welcome-parent.component.html',
  styleUrls: ['./welcome-parent.component.scss'],
  providers: [HammerGestureConfig]
})
export class WelcomeParentComponent implements OnInit {

  welcomeText = "Welcome to the greatest Advent Calendar App of the year!";
  constructor() { }

  ngOnInit(): void {
  }
  onSwipeUp(evt) {
    console.log(evt); 
  }

}
