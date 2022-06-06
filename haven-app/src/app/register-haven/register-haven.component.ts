import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HavenService } from 'src/app/services/haven.service';
import { IHavenRegister } from '../interfaces/IHavenRegister';

@Component({
  selector: 'app-register-haven',
  templateUrl: './register-haven.component.html',
  styleUrls: ['./register-haven.component.css']
})
export class RegisterHavenComponent implements OnInit {
  formHaven: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder, private router : Router, private havenService: HavenService, private snackBar: MatSnackBar) { 
    this.formHaven = this.formBuilder.group({
        typeHouse: [''],
        description:  [''],
        location:  [''],
        typePeople:  [''],
        quantityPeople:  ['']
    });
  }

 

  ngOnInit(): void {
    this.formHaven = this.formBuilder.group({
      typeHouse: [''],
      description:  [''],
      location:  [''],
      typePeople:  [''],
      quantityPeople:  ['']
    });
  }

  onRegister(){
    this.loading = true;
    var haven = this.formHaven.getRawValue() as IHavenRegister;
    this.havenService.register(haven)
    .subscribe({
        next: () => {
          this.snackBar.open('Registrado com sucesso.', 'Haven registrado com sucesso.', {
            duration: 3000
          });
            this.router.navigate(['/']);
        },
        error: error => {
          this.snackBar.open('Falha no registro.', 'Erro ao registrar o haven.', {
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
