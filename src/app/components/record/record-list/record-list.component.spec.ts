import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordListComponent } from '../records-list/records-list.component';

describe('RecordListComponent', () => {
  let component: RecordListComponent;
  let fixture: ComponentFixture<RecordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
