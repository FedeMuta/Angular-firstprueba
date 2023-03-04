import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardxpComponent } from './cardxp.component';

describe('CardxpComponent', () => {
  let component: CardxpComponent;
  let fixture: ComponentFixture<CardxpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardxpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardxpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
