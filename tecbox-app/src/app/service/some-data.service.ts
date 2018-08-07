import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {SomeData} from "../model/some-data";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class SomeDataService {

  private someDataUrl = environment.someDataUrl;

  constructor(
    private http: HttpClient
  ) { }

  getSomeData(): Observable<SomeData> {
    return this.http.get<SomeData>(this.someDataUrl+'/api/somedata')
      .pipe(
        tap(someData => console.log('fetched some data')),
      )
  }
}
