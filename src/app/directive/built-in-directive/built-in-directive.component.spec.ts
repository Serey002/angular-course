import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuiltInDirectiveComponent } from './built-in-directive.component';

describe('BuiltInDirectiveComponent', () => {
  let component: BuiltInDirectiveComponent;
  let fixture: ComponentFixture<BuiltInDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInDirectiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuiltInDirectiveComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
