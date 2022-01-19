import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRelationDialogComponent } from './contact-relation-dialog.component';

describe('ContactRelationDialogComponent', () => {
  let component: ContactRelationDialogComponent;
  let fixture: ComponentFixture<ContactRelationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRelationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRelationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
