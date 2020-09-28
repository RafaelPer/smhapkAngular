import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TomadasPage } from './tomadas.page';

describe('TomadasPage', () => {
  let component: TomadasPage;
  let fixture: ComponentFixture<TomadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TomadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
