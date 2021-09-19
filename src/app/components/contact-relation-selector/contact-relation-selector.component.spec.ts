import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRelationSelectorComponent } from './contact-relation-selector.component';

describe('ContactRelationSelectorComponent', () => {
  let component: ContactRelationSelectorComponent;
  let fixture: ComponentFixture<ContactRelationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRelationSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRelationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
