import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ILogin} from 'src/app/interfaces/ILogin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private snackBar: MatSnackBar) { 
                this.formLogin = this.formBuilder.group({
                  email: [''],
                  password: ['']
                });
              }

  ngOnInit(): void {
    
  }

  criarForm() {
    this.formLogin = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  logar() {
    var usuario = this.formLogin.getRawValue() as ILogin;
    this.authService.logar(usuario)
    .subscribe({
      next: () => {
        this.snackBar.open('Exito.', 'Login efetuado com sucesso', {
          duration: 3000
        });
          this.router.navigate(['/']);
      },
      error: error => {
        this.snackBar.open('Falha no login.', 'Falha ou tenta realizar o login, tente novamente.', {
          duration: 3000
        });
      }
    });
  }

  register(){
    this.router.navigate(['register']);
  }
  back(){
    this.router.navigate(['/']);
  }

}
