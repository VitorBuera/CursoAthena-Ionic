import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Peixes } from 'src/app/models/Peixes';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() peixe: Peixes;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  async detalhes(peixe: any) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {peixe}
    });
    modal.present();
  }
}
