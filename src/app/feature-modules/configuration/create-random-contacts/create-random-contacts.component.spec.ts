import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRandomContactsComponent } from './create-random-contacts.component';

describe('CreateRandomContactsComponent', () => {
  let component: CreateRandomContactsComponent;
  let fixture: ComponentFixture<CreateRandomContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRandomContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRandomContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
