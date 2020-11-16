import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input () text;
  @Input () fontSize;
  @Input () color;
  @Input () fontFamily;
  @Input () textShadow;
  constructor() { }

  ngOnInit(): void {
  }

}
