import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordViewComponent } from '../records-view/records-view.component';

describe('RecordViewComponent', () => {
  let component: RecordViewComponent;
  let fixture: ComponentFixture<RecordViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
