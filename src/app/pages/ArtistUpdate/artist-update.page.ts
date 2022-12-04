import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/interfaces/Artist';
import { ArtistsInfoService } from '../../services/mousik.services';

@Component({
  selector: 'app-artist-update',
  templateUrl: './artist-update.page.html',
  styleUrls: ['./artist-update.scss'],
})

export class ArtistUpdatePage implements OnInit {

  constructor(private service: ArtistsInfoService) { }

  ngOnInit(): void { }
}
