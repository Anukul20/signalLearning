import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchList } from './lunch-list';

describe('LunchList', () => {
  let component: LunchList;
  let fixture: ComponentFixture<LunchList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LunchList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunchList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
