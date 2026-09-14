import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BetweenComponentComponent } from './between-component.component';

describe('BetweenComponentComponent', () => {
  let component: BetweenComponentComponent;
  let fixture: ComponentFixture<BetweenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetweenComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BetweenComponentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
