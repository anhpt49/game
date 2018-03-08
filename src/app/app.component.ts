import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  numOfColumn = 5;
  num = this.numOfColumn * this.numOfColumn;
  randomBox = (value) => {
    let a = [];
    const ramdomColor = this.getRandomColor();
    const randomNumber = this.getRandomInt(0, this.num);
    for (let i = 1; i <= value; ++i) {
      a.push(
        { text: "", cols: 1, rows: 1, color: ramdomColor, opacity: i === randomNumber ? '0.8' : '1' }
      )
    }
    return a;
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
