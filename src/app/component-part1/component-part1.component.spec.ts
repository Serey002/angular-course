import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentPart1Component } from './component-part1.component';

describe('ComponentPart1Component', () => {
  let component: ComponentPart1Component;
  let fixture: ComponentFixture<ComponentPart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPart1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentPart1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
