import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRelationListComponent } from './contact-relation-list.component';

describe('ContactRelationsComponent', () => {
  let component: ContactRelationListComponent;
  let fixture: ComponentFixture<ContactRelationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRelationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRelationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
