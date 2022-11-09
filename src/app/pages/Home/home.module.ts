import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/components/Header/header.module';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ArtistsListComponent } from 'src/app/components/ArtistsList/artistsList.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, ArtistsListComponent]
})
export class HomePageModule {}
