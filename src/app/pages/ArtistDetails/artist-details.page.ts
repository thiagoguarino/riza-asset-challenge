import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.page.html',
  styleUrls: ['./artist-details.scss'],
})

export class ArtistDetailsPage {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Mousik - Artist Details');
  }
}
