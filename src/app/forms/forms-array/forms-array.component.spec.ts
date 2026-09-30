import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsArrayComponent } from './forms-array.component';

describe('FormsArrayComponent', () => {
  let component: FormsArrayComponent;
  let fixture: ComponentFixture<FormsArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsArrayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsArrayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
