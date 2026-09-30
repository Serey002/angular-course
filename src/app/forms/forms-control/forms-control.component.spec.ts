import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsControlComponent } from './forms-control.component';

describe('FormsControlComponent', () => {
  let component: FormsControlComponent;
  let fixture: ComponentFixture<FormsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsControlComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
