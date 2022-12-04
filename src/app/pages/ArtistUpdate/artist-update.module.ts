import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ArtistUpdatePage } from './artist-update.page';
import { HeaderModule } from 'src/app/components/Header/header.module';
import { ArtistUpdatePageRoutingModule } from './artist-update-routing.module';
import { ArtistFormModule } from 'src/app/components/ArtistForm/artistForm.module';
import { ArtistButtonModule } from 'src/app/components/ArtistButton/artistButton.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ArtistFormModule,
    ArtistButtonModule,
    ArtistUpdatePageRoutingModule,
  ],
  declarations: [ArtistUpdatePage]
})
export class ArtistUpdatePageModule {}
