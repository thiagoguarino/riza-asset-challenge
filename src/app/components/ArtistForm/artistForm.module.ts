import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArtistButtonModule } from '../ArtistButton/artistButton.module';
import { ArtistFormComponent } from '../ArtistForm/artistForm.component';

@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ArtistButtonModule,
  ],
  declarations: [
    ArtistFormComponent
  ],
  exports: [
    IonicModule,
    ArtistFormComponent,
  ]
})
export class ArtistFormModule { }
