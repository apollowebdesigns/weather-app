import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'app';
  async getData() {
    try {
      const response = await fetch('https://us-central1-userddata.cloudfunctions.net/helloWorld/weatherdata');
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
    } catch (error) {
      console.log(error);
    }
  }

  test() {
    return $(document).foundation();
  }

  ngOnInit() {
    this.test();
    this.getData();
  }
}
