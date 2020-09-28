import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComodoInfoPage } from './comodo-info.page';

describe('ComodoInfoPage', () => {
  let component: ComodoInfoPage;
  let fixture: ComponentFixture<ComodoInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComodoInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComodoInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
