import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFilterPageComponent } from './books-filter-page.component';

describe('BooksFilterPageComponent', () => {
  let component: BooksFilterPageComponent;
  let fixture: ComponentFixture<BooksFilterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksFilterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
