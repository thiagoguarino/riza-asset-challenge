import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../Header/header.component';

@NgModule({
  imports: [
    RouterModule,
    IonicModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    IonicModule,
    HeaderComponent,
  ]
})
export class HeaderModule { }
