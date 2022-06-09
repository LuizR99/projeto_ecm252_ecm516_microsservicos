import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IHaven } from 'src/app/interfaces/IHaven';
import { IUser } from 'src/app/interfaces/IUser';
import { HavenService } from 'src/app/services/haven.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  user: IUser = {name: "", email: "", phoneNumber: ""};
  showContato: boolean = false;  
  @Input() haven: IHaven ={ id: "", idUser: "", typeHouse: "", description: "", location: "", typePeople: "", quantityPeople: 0};
  @Input() edit: boolean = false;

  constructor(private userService: UserService, private havenService: HavenService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  onClickContato(){
    if(this.user.name === ""){
      this.userService.getById(this.haven.idUser).subscribe(
        (data) => this.user = data.data[0]
      );
    }
    this.showContato = !this.showContato;
  }

  onClickEdit(){
    let id = this.haven.id
    this.router.navigate(["update-haven", {id}])
  }

  onClickRemove(){
    var id = this.haven.id;
    this.havenService.delete(id).subscribe(
      {
        next: () => {
          window.location.reload();
          this.snackBar.open('Haven removido com sucesso.', 'A remoção do haven foi efetuada com suceso.', {
            duration: 5000
          });
        },
        error: error => {
          this.snackBar.open('Erro ao remover o haven', 'Ocorreu um erro ao remover o haven.', {
            duration: 5000
          });
        }
    }
    );

  }

}
