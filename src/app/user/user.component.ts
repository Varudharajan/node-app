import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userForm: FormGroup;

  private _user: User;
  get user(): User {
    return this._user;
  }
  @Input()
  set user(newUser: User) {
    this._user = newUser;
    this.buildUserForm(newUser);
  }

  constructor(private formBuilder: FormBuilder) {
  }

  buildUserForm(user: User) {
    console.info(user)
    this.userForm = this.formBuilder.group({
      'name': new FormControl(user.name),
      'email': new FormControl(user.email)
    });
  }

}
