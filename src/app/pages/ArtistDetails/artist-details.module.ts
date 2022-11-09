import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ArtistDetailsPage } from './artist-details.page';
import { HeaderModule } from 'src/app/components/Header/header.module';
import { ArtistsProfileComponent } from 'src/app/components/ArtistProfile/artistsProfile.component';

import { ArtistDetailsPageRoutingModule } from './artist-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ArtistDetailsPageRoutingModule,
  ],
  declarations: [ArtistDetailsPage, ArtistsProfileComponent]
})
export class ArtistDetailsPageModule {}
