import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavensComponent } from './havens.component';

describe('HavensComponent', () => {
  let component: HavensComponent;
  let fixture: ComponentFixture<HavensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HavensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HavensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
