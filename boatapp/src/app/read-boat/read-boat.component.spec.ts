import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBoatComponent } from './read-boat.component';

describe('ReadBoatComponent', () => {
  let component: ReadBoatComponent;
  let fixture: ComponentFixture<ReadBoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadBoatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
