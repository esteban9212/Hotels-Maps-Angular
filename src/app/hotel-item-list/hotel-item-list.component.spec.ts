import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelItemListComponent } from './hotel-item-list.component';

describe('HotelItemListComponent', () => {
  let component: HotelItemListComponent;
  let fixture: ComponentFixture<HotelItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
