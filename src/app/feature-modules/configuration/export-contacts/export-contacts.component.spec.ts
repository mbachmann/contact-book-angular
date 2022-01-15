import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContactsComponent } from './export-contacts.component';

describe('ExportContactsComponent', () => {
  let component: ExportContactsComponent;
  let fixture: ComponentFixture<ExportContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
