import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripsMorePage } from './trips-more.page';

describe('TripsMorePage', () => {
  let component: TripsMorePage;
  let fixture: ComponentFixture<TripsMorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsMorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripsMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
