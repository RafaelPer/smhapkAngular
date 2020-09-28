import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
//import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FuncPage } from './func.page';

describe('FuncPage', () => {
  let component: FuncPage;
  let fixture: ComponentFixture<FuncPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FuncPage],
      imports: [IonicModule.forRoot(), /*ExploreContainerComponentModule*/]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
