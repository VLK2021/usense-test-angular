import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-title-component',
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.css']
})

export class TitleComponentComponent implements OnInit {
  colors: string[] = ['green', 'red', 'blue', 'yellow', 'lightseagreen', 'orange'];
  currentColorIndex: number = 0;
  interval: any;

  constructor() {
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.setCurrentColorIndex((this.currentColorIndex + 1) % this.colors.length);
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  setCurrentColorIndex(index: number): void {
    this.currentColorIndex = index;
  }

  get currentColor(): string {
    return this.colors[this.currentColorIndex];
  }

}
