import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCategoryComponent } from './view-all-category.component';

describe('ViewAllCategoryComponent', () => {
  let component: ViewAllCategoryComponent;
  let fixture: ComponentFixture<ViewAllCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
