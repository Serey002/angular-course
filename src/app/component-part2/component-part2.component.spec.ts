import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentPart2Component } from './component-part2.component';

describe('ComponentPart2Component', () => {
  let component: ComponentPart2Component;
  let fixture: ComponentFixture<ComponentPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPart2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentPart2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
