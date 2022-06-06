import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  isLogado: boolean = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.isLogado = this.auth.logado;
  }

  navLogin(){
    console.log("navLogin");
    this.router.navigate(['login']);
  }

  logout(){
    this.auth.logout();
    this.isLogado = false;
  }

  addHaven(){
    this.router.navigate(['add-haven']);
  }

}
