import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Password } from 'primeng/password';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'my-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements AfterViewInit {

  @ViewChild(Password) passwordEl: Password | undefined;

  userForm: FormGroup;
  loading$: Observable<boolean>;
  dupEmail = false;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
  ) {
    this.userForm = this.initForm();
    this.loading$ = this.usersService.isLoading$();
  }

  ngAfterViewInit(): void {
    this.createPassValidator();
  }

  initForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', [Validators.required]],
      description: ['', Validators.required],
    })
  }

  submitForm(): void {
    this.dupEmail = false;
    this.usersService.add(this.userForm.value).subscribe(
      (res) => {
        this.userForm = this.initForm();
      },
      (err) => {
        if (err.error?.email?.kind === "unique") {
          this.dupEmail = true;
        }
      }
    );
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get isPasswordInvalid() {
    return this.password?.invalid && this.password.touched;
  }

  createPassValidator(): void {
    const regex = this.passwordEl?.strongCheckRegExp;
    if (regex) {
      this.password?.setValidators([Validators.required, Validators.pattern(regex)]);
      this.password?.updateValueAndValidity();
    }
  }

}