import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IPassword } from 'src/app/interfaces/IPassword';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router : Router, private authService: AuthService, private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      password: [''],
      confirmPassword:  [''],
    } );
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: [''],
      confirmPassword:  [''],
    } );
  }

  onRegister(){
    this.loading = true;
    var password = this.form.getRawValue() as IPassword;
    this.authService.updatePassword(password)
    .subscribe({
        next: () => {
          this.snackBar.open('Senha atualizado com sucesso.', 'Exito ao atualizar a senha', {
            duration: 3000
          });
            this.router.navigate(['/']);
        },
        error: error => {
          this.snackBar.open('Falha em atualizar a senha.', 'Erro ao atualizar a senha.', {
            duration: 3000
          });
        }
    });
    this.loading = false;
  
  }

  onCancel(){
    this.router.navigate(['/']);
  }

}
