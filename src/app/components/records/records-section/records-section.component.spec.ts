import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsSectionComponent } from './records-section.component';

describe('RecordsSectionComponent', () => {
  let component: RecordsSectionComponent;
  let fixture: ComponentFixture<RecordsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
