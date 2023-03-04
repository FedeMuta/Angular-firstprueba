import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardstComponent } from './cardst.component';

describe('CardstComponent', () => {
  let component: CardstComponent;
  let fixture: ComponentFixture<CardstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
