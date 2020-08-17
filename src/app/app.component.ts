import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'seivial';
  
  constructor(private viewPort: ViewportScroller) {}

  public onClick(elementId: string): void {
    console.log(elementId);
    this.viewPort.scrollToAnchor(elementId);
  }
}
