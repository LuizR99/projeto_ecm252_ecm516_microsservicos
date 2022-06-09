import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IHaven } from 'src/app/interfaces/IHaven';
import { HavenService } from 'src/app/services/haven.service';

@Component({
  selector: 'app-Update-haven',
  templateUrl: './Update-haven.component.html',
  styleUrls: ['./Update-haven.component.css']
})
export class UpdateHavenComponent implements OnInit {
  formHaven: FormGroup;
  loading = false;
  id: String | null  = "" ;

  constructor(private formBuilder: FormBuilder, private router : Router, private havenService: HavenService, private snackBar: MatSnackBar ,private  activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.formHaven = this.formBuilder.group({
      typeHouse: [""],
      description:  [""],
      location:  [""],
      typePeople:  [""],
      quantityPeople:  [""]
    });
  }
    

  

 

  ngOnInit(): void {
    

  }

  onRegister(){
    this.loading = true;
    var haven = this.formHaven.getRawValue() as IHaven;
    if(this.id === null){
      this.router.navigate(["/havens"]);
    }
    this.havenService.update(haven, this.id!)
    .subscribe({
        next: () => {
          this.snackBar.open('Atualizado com sucesso.', 'Haven atualizado com sucesso.', {
            duration: 3000
          });
            this.router.navigate(['/']);
        },
        error: () => {
          this.snackBar.open('Falha ao Atualizar.', 'Erro ao atualizar o haven.', {
            duration: 3000
          });
        }
    });
    this.loading = false;
  
  }

  onCancel(){
    this.router.navigate(['/havens']);
  }

}
