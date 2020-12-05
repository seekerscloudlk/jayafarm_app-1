import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutstSettlePage } from './outst-settle.page';

describe('OutstSettlePage', () => {
  let component: OutstSettlePage;
  let fixture: ComponentFixture<OutstSettlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutstSettlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutstSettlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
