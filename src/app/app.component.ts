
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  public title = '';

  public showMenu: boolean = false;

  constructor(

  ) {

  }
  ngOnInit(): void {
    // console.log(document.URL.indexOf('login') !== -1);
    setTimeout(() => {
      this.showMenu = document.URL.indexOf('login') === -1;
      console.log('ok');
    }, 1000);
  }
}
