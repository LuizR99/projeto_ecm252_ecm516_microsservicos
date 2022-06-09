import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHavenComponent } from './update-haven.component';

describe('updateHavenComponent', () => {
  let component: UpdateHavenComponent;
  let fixture: ComponentFixture<UpdateHavenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHavenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHavenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
