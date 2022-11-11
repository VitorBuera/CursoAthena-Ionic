import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Peixes } from 'src/app/models/Peixes';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() peixe: Peixes;

  constructor(
    private router: Router,
    private modalCrtl: ModalController
  ) { }

  ngOnInit() {}

  fechar(){
      this.modalCrtl.dismiss();
  }
}
