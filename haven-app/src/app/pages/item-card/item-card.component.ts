import { Component, Input, OnInit } from '@angular/core';
import { IHaven } from 'src/app/interfaces/IHaven';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  showContato: boolean = false;  
  @Input() haven: IHaven ={ idUser: "", typeHouse: "", description: "", location: "", typePeople: "", quantityPeople: 0};

  constructor() { }

  ngOnInit(): void {
  }

  onClickContato(){
    this.showContato = !this.showContato;
  }

}
