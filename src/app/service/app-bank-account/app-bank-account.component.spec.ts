import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppBankAccountComponent } from './app-bank-account.component';

describe('AppBankAccountComponent', () => {
  let component: AppBankAccountComponent;
  let fixture: ComponentFixture<AppBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBankAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBankAccountComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
