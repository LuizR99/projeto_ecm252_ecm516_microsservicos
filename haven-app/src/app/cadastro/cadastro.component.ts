import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  submitted = false

  constructor() { }

  name: string
  email:string
  phone:string
  password:string
  confirmPassword:string

  onSubmit(): void {
    this.submitted = true
  }

}
