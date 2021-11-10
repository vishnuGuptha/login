import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidUrlExceptionComponent } from './invalid-url-exception.component';

describe('InvalidUrlExceptionComponent', () => {
  let component: InvalidUrlExceptionComponent;
  let fixture: ComponentFixture<InvalidUrlExceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidUrlExceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidUrlExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
