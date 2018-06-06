import { Component, OnInit } from '@angular/core';
import * as _ from 'lowdash';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data = '';

  async getData() {
    try {
      const response = await fetch('https://us-central1-userddata.cloudfunctions.net/helloWorld/weatherdata');
      if (response.ok) {
        const jsonResponse = await response.json();
        this.data = JSON.stringify(jsonResponse);
        return jsonResponse;
      }
    } catch (error) {
      console.log(error);
    }
  }

  resetData(newtype: string) {
    return this.data = newtype;
  }

  constructor() { }

  async ngOnInit() {
    await this.getData();
  }

}
