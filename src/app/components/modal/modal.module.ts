import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardModule } from '../card/card.module';
import { ModalComponent } from './modal.component';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ModalComponent]
})
export class ModalModule { }
