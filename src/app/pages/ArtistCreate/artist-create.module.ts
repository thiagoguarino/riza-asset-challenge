import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ArtistCreatePage } from './artist-create.page';
import { HeaderModule } from 'src/app/components/Header/header.module';
import { ArtistCreatePageRoutingModule } from './artist-create-routing.module';
import { ArtistFormModule } from 'src/app/components/ArtistForm/artistForm.module';
import { ArtistButtonModule } from 'src/app/components/ArtistButton/artistButton.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ArtistCreatePageRoutingModule,
    ArtistButtonModule,
    ArtistFormModule
  ],
  declarations: [ArtistCreatePage]
})
export class ArtistCreatePageModule {}
