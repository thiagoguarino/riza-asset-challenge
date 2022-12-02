import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/Artist';
import { ArtistsInfoService } from 'src/app/services/mousik.services';

@Component({
  selector: 'app-artists',
  templateUrl: './artistsList.component.html',
  styleUrls: ['./artistsList.component.scss']
})

export class ArtistsListComponent implements OnInit {
  allArtists: Artist[];

  constructor(private service: ArtistsInfoService) { }

  ngOnInit(): void {
    this.getArtists();
  }

  // using mousik services function to get data from firestore
  async getArtists(): Promise<void> {
    this.allArtists = await this.service.getAllArtistsInfo();
  }
}
