import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { sha512 } from 'js-sha512';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  isSubmitted = false;
  private userCreate: User;
  // mismatchedPasswords: boolean;

  constructor(public formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nomeUsr: ['', [Validators.required]],
      snUsr: ['', [Validators.required]],
      usernameUsr: ['', [Validators.required]],
      emailUsr: ['', [Validators.required, Validators.pattern(/[\w\.-]*[a-zA-Z0-9_]@[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]/)]],
      celularUsr: ['', [Validators.required, Validators.pattern(/(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})/)]],
      passwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)]],
      confirmPasswd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)]],
      isActive: [true, [Validators.required]],
      issync: [true, [Validators.required]]
    }, {validator: this.matchingPasswords.bind(this)});
  }

  register(){
    this.isSubmitted = true;
    if (!this.registerForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      //console.log(this.registerForm.value);
      let hash = sha512.create().update(this.registerForm.value.passwd).hex();
      //console.log(hash);
      this.userCreate = {
        username: this.registerForm.value.usernameUsr,
        nome: this.registerForm.value.nomeUsr,
        sobrenome: this.registerForm.value.snUsr,
        email: this.registerForm.value.emailUsr,
        celular: this.registerForm.value.celularUsr,
        isActive: this.registerForm.value.isActive,
        issync: this.registerForm.value.issync,
        senha: hash
      };
      
      //console.log(this.userCreate);

      this.userService.createUserMongoDB(this.userCreate).subscribe((response) => {
        console.log(response);
      }, (err) => {
        console.log(err);
      });
      // let hash2 = sha512.create().update(this.registerForm.value.passwd).hex();
      // console.log(hash2);
    }
  }

  // matchingPasswords(passwd: string, confirmPasswd: string) {
  //   return (group: FormGroup): {[key: string]: any} => {
  //     let password = group.controls[passwd];
  //     let confirmPassword = group.controls[confirmPasswd];

  //     if (password.value !== confirmPassword.value) {
  //       return {
  //         mismatchedPasswords: true
  //       };
  //     }
  //   }
  // }

  matchingPasswords(formGroup: FormGroup) {
    const { value: password } = formGroup.get('passwd');
    const { value: confirmPassword } = formGroup.get('confirmPasswd');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  get errorControl() {
    return this.registerForm.controls;
  }

}
