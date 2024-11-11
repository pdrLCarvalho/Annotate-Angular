import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {

  timeNow: Date = new Date()
  date: string = `${this.timeNow.getDate()}/${this.timeNow.getMonth() + 1}/${this.timeNow.getFullYear()}`
  hour: string = `${this.timeNow.getHours()}:${this.timeNow.getMinutes()}`

  ngOnInit(): void {
    setInterval(() => {
      this.timeNow = new Date()
      this.date = `${this.timeNow.getDate()}/${this.timeNow.getMonth() + 1}/${this.timeNow.getFullYear()}`
      this.hour = `${this.timeNow.getHours()}:${this.timeNow.getMinutes()}`
    }, 1000);
  }
}
