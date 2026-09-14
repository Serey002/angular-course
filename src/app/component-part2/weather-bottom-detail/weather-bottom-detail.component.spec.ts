import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherBottomDetailComponent } from './weather-bottom-detail.component';

describe('WeatherBottomDetailComponent', () => {
  let component: WeatherBottomDetailComponent;
  let fixture: ComponentFixture<WeatherBottomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherBottomDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherBottomDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
