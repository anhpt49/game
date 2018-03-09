import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tiles = [];

  numOfColumn = 2;
  num = this.numOfColumn * this.numOfColumn;

  numOfTrue = 0;
  numOfFalse = 0;

  ngOnInit() {
    this.tiles = this.randomBox(this.num);
  }

  randomBox = (value) => {
    let a = [];
    const ramdomColor = this.getRandomColor();
    const randomNumber = this.getRandomInt(0, this.num);
    for (let i = 1; i <= value; ++i) {
      a.push(
        { text: "", cols: 1, rows: 1, color: ramdomColor, opacity: i === randomNumber ? '0.9' : '1' }
      )
    }
    return a;
  }

  checkBox = (box: any) => {
    if (box.opacity === '0.9') {
      this.numOfTrue++;
      if (this.numOfTrue % 5 === 0) {
        this.numOfColumn++;
      }
      this.num = this.numOfColumn * this.numOfColumn;
    }
    else {
      this.numOfFalse++;
    }
    this.tiles = this.randomBox(this.num);
  }

  getRandomColor = (): string => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



}
