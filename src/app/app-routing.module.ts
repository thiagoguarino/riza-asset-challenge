import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/Home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'artistDetails/:name',
    loadChildren: () => import('./pages/ArtistDetails/artist-details.module').then( m => m.ArtistDetailsPageModule)
  },
  {
    path: 'artistCreate',
    loadChildren: () => import('./pages/ArtistCreate/artist-create.module').then( m => m.ArtistCreatePageModule)
  },
  {
    path: 'artistUpdate/:name',
    loadChildren: () => import('./pages/ArtistUpdate/artist-update.module').then( m => m.ArtistUpdatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
