import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data = '';
  flatTemp = '';

  async getData() {
    try {
      const response = await fetch('https://us-central1-userddata.cloudfunctions.net/helloWorld/weatherdata');
      if (response.ok) {
        let jsonResponse = await response.json();
        jsonResponse = Object.values(jsonResponse);
        this.data = JSON.stringify(jsonResponse);
        this.flatTemp = jsonResponse[jsonResponse.length - 1];
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
