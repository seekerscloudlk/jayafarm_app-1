import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutstMorePage } from './outst-more.page';

describe('OutstMorePage', () => {
  let component: OutstMorePage;
  let fixture: ComponentFixture<OutstMorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutstMorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutstMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
