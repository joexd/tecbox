import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeDataComponent } from './some-data.component';
import { HttpClientModule } from '@angular/common/http';
import {SomeDataService} from "../service/some-data.service";

describe('SomeDataComponent', () => {
  let component: SomeDataComponent;
  let fixture: ComponentFixture<SomeDataComponent>;
  let service: SomeDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ SomeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
