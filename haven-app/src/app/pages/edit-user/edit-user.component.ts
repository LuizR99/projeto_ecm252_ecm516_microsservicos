import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router : Router, private userService: UserService, private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: [''],
      email:  [''],
      phoneNumber:  [''],
    } );
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      email:  [''],
      phoneNumber:  [''],
    } );
  }

  onRegister(){
    this.loading = true;
    var user = this.form.getRawValue() as IUser;
    this.userService.update(user)
    .subscribe({
        next: () => {
          this.snackBar.open('Atualizado com sucesso.', 'Exito ao atualizar o usuario.', {
            duration: 3000
          });
            this.router.navigate(['/']);
        },
        error: error => {
          this.snackBar.open('Falha em atualizar.', 'Erro ao atualizar o usuario.', {
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
