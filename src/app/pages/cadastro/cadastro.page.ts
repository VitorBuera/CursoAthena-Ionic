import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
nome: string;
senha: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['/login']);
  }

  cadastrar() {
    const usuarios = JSON.parse(localStorage.getItem('Usuarios') || '[]');

    usuarios.push({
      nome: this.nome,
      senha: this.senha
    });

    localStorage.setItem('Usuarios', JSON.stringify(usuarios));
    this.router.navigate(['/']);
  }
}
