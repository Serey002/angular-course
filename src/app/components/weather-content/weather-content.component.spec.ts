import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherContentComponent } from './weather-content.component';

describe('WeatherContentComponent', () => {
  let component: WeatherContentComponent;
  let fixture: ComponentFixture<WeatherContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherContentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
