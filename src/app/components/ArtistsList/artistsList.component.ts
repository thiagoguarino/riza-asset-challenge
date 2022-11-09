import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/Artist';
import { ARTISTS } from '../../helpers/artistsInfo';

@Component({
  selector: 'app-artists',
  templateUrl: './artistsList.component.html',
  styleUrls: ['./artistsList.component.scss']
})

export class ArtistsListComponent implements OnInit {

  artists = ARTISTS;
  selectedArtist?: Artist;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
  }
}
