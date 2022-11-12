import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
nome: string;
senha: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastrar(){
    this.router.navigate(['/cadastro']);
  }

  logar(){
    const usuarios = JSON.parse(localStorage.getItem('Usuarios') || '[]');

    const achou = usuarios.find( (usuario: any) => usuario.nome === this.nome && usuario.senha === this.senha);
    if(achou){
      this.router.navigate(['/home']);
    }else{
      // alert('Deu ruim!');
    }

    this.router.navigate(['/home']);
  }
}
