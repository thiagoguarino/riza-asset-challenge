import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/Artist';
import { ARTISTS } from 'src/app/helpers/artistsInfo';
import { ArtistsInfoService } from 'src/app/services/mousik.services';

@Component({
  selector: 'app-artists',
  templateUrl: './artistsList.component.html',
  styleUrls: ['./artistsList.component.scss']
})

export class ArtistsListComponent implements OnInit {

  artists = ARTISTS; // pass hard coded ArtistsInfo array
  allArtists: Artist[];
  selectedArtist?: Artist;

  constructor(private service: ArtistsInfoService) { }

  ngOnInit(): void {
  }

  // using mousik services function to get data from firestore
  async getArtists() {
    this.allArtists = await this.service.getAllArtistsInfo();
  }

  // testing if firestore data (array of artistsInfo) is fetched from firebase when artist if clicked
  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
    const testing = this.getArtists();
    console.log(testing);
  }
}
