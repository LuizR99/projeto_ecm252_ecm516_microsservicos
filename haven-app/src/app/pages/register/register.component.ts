import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser} from 'src/app/interfaces/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService,
      private snackBar: MatSnackBar
  ) { 
    this.form = this.formBuilder.group({
      name: [''],
      email:  [''],
      phoneNumber:  [''],
      password:  [''],
      confirmPassword:  ['']
  });
  }

  ngOnInit() {
      this.form = this.formBuilder.group({
          name: [''],
          email:  [''],
          phoneNumber:  [''],
          password:  [''],
          confirmPassword:  ['']
      });
  }


  onSubmit() {

  }

  onRegister(){
    this.loading = true;
    var user = this.form.getRawValue() as IUser;
    this.userService.register(user)
    .subscribe({
        next: () => {
          this.snackBar.open('Registrado com sucesso.', 'Usuario registrado com sucesso.', {
            duration: 3000
          });
            this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: error => {
          this.snackBar.open('Falha no registro.', 'Erro ao registrar o usuario.', {
            duration: 3000
          });
        }
    });
    this.loading = false;
  }

  onCancel(){
      this.router.navigate(['login']);
  }
}
