import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlarmesPage } from './alarmes.page';

describe('AlarmesPage', () => {
  let component: AlarmesPage;
  let fixture: ComponentFixture<AlarmesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlarmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
