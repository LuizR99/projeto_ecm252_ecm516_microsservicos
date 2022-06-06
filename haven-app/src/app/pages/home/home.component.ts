import { Component, OnInit } from '@angular/core';
import { IHaven } from 'src/app/interfaces/IHaven';
import { HavenService } from 'src/app/services/haven.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  listHavens: IHaven[] = [];

  constructor(
    private havenService : HavenService
  ) { 
    this.havenService.getHavens().subscribe(
      (data) => this.listHavens = data.data,
    );
  }

  ngOnInit(): void {
  }

}
