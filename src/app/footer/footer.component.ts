import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  startCount(event) {
    // event variable can be named anything. 
    console.log(event);
    window.alert(`The event count is ${event}`);
  }

}
