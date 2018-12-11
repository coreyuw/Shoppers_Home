import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExampleComponent } from './admin-example.component';

describe('AdminExampleComponent', () => {
  let component: AdminExampleComponent;
  let fixture: ComponentFixture<AdminExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
