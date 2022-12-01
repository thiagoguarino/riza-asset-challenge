import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArtistButtonComponent } from './artistButton.component';

@NgModule({
  imports: [
    RouterModule,
    IonicModule
  ],
  declarations: [
    ArtistButtonComponent
  ],
  exports: [
    IonicModule,
    ArtistButtonComponent
  ]
})
export class ArtistButtonModule { }
