import { Component, OnInit } from '@angular/core';
import {SomeDataService} from "../service/some-data.service";
import {SomeData} from "../model/some-data";

@Component({
  selector: 'app-component1',
  templateUrl: './some-data.component.html',
  styleUrls: ['./some-data.component.scss']
})
export class SomeDataComponent implements OnInit {

  someData: SomeData;

  constructor(
    private someDataService: SomeDataService
  ) { }

  ngOnInit() {
    this.getSomeData();
  }

  getSomeData(): void {
    this.someDataService.getSomeData()
      .subscribe(someData => this.someData = someData)
  }

}
