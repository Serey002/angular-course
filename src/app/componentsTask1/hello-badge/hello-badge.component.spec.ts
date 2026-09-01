import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloBadgeComponent } from './hello-badge.component';

describe('HelloBadgeComponent', () => {
  let component: HelloBadgeComponent;
  let fixture: ComponentFixture<HelloBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloBadgeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
