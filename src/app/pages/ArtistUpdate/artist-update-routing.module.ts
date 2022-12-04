import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistUpdatePage } from './artist-update.page';

const routes: Routes = [
  {
    path: '', component: ArtistUpdatePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistUpdatePageRoutingModule {}
