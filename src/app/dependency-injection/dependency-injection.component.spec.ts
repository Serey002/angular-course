import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DependencyInjectionComponent } from './dependency-injection.component';

describe('DependencyInjectionComponent', () => {
  let component: DependencyInjectionComponent;
  let fixture: ComponentFixture<DependencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependencyInjectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DependencyInjectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
