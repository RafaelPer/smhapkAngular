import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuzesPage } from './luzes.page';

describe('LuzesPage', () => {
  let component: LuzesPage;
  let fixture: ComponentFixture<LuzesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuzesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
