import { Component, OnInit } from '@angular/core';
import { ArtistsInfoService } from '../../services/mousik.services';
import { Artist } from 'src/app/interfaces/Artist';

@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.page.html',
  styleUrls: ['./artist-create.scss'],
})

export class ArtistCreatePage implements OnInit {

  constructor(private service: ArtistsInfoService) { }

  ngOnInit(): void {

  }
}
