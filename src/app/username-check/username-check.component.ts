import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<app-username-check>',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css']
})
export class UsernameCheckComponent implements OnInit {

  constructor() { }
    userName:'';

  ngOnInit(): void {
  }

  onPressClearContent() {
    this.userName='';
  }

}
