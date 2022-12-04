import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistCreatePage } from './artist-create.page';

const routes: Routes = [
  {
    path: '', component: ArtistCreatePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistCreatePageRoutingModule {}
