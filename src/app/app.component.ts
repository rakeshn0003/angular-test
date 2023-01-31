import { Component, OnInit, VERSION } from '@angular/core';
import { of } from 'rxjs';

const getData = () => {
  return of({
    key: 'value',
    userLogTime: [
      {
        date: 'Rahul',
        key: 'value',
      },
      {
        date: 'sanjay',
        key: 'value',
      },
      {
        date: 'harsha',
        key: 'value',
      },
    ],
  });
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public dates = [];
  buttonDisabled: boolean;
  //readmore variable, its true than read more string will print
  ReadMore: boolean = true;

  //hiding info box
  visible: boolean = false;
  //onclick toggling both
  onclick() {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible;
  }

  ngOnInit() {
    this.buttonDisabled = false;
    getData().subscribe((data) => {
      // you can also check on the array length if you need
      if (data && data.userLogTime) {
        this.dates = data.userLogTime.map((d) => d.date);
        console.log(this.dates);
      }
    });
  }
}
