import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { User } from '../user.model';
import { Address } from '../address.model';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name', async(() => {
    // given
    const compiled = fixture.debugElement.nativeElement;

    // when
    fixture.componentInstance.user = new User(1,'John','test@test.com','testtest',new Address('Toronto'));
    fixture.detectChanges();

      // then
       expect(compiled.querySelector('#name').value).toMatch('John');
  }));

});
