import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRelationsComponent } from './contact-relations.component';

describe('ContactRelationsComponent', () => {
  let component: ContactRelationsComponent;
  let fixture: ComponentFixture<ContactRelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRelationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
