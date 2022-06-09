import { Component, OnInit } from '@angular/core';
import { IHaven } from 'src/app/interfaces/IHaven';
import { HavenService } from 'src/app/services/haven.service';

@Component({
  selector: 'app-havens',
  templateUrl: './havens.component.html',
  styleUrls: ['./havens.component.css']
})
export class HavensComponent implements OnInit {
  listHavens: IHaven[] = [];
  title = "Edit Havens"
  constructor(private havenService: HavenService) {
    this.havenService.getUserHavens().subscribe(
      (data) => this.listHavens = data.data,
    );
   }

  ngOnInit(): void {
  }

}
