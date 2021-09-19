import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGroupSelectorComponent } from './contact-group-selector.component';

describe('ContactGroupSelectorComponent', () => {
  let component: ContactGroupSelectorComponent;
  let fixture: ComponentFixture<ContactGroupSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactGroupSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactGroupSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
