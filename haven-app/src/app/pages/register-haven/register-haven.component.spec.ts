import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHavenComponent } from './register-haven.component';

describe('RegisterHavenComponent', () => {
  let component: RegisterHavenComponent;
  let fixture: ComponentFixture<RegisterHavenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHavenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHavenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
