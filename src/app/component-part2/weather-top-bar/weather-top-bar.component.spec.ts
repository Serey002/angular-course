import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherTopBarComponent } from './weather-top-bar.component';

describe('WeatherTopBarComponent', () => {
  let component: WeatherTopBarComponent;
  let fixture: ComponentFixture<WeatherTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherTopBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherTopBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
