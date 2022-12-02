import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Title} from '@angular/platform-browser';
import { ArtistsInfoService } from '../../services/mousik.services';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.page.html',
  styleUrls: ['./artist-details.scss'],
})

export class ArtistDetailsPage implements OnInit {
  artistParam: string;

  constructor(private titleService: Title, private service: ArtistsInfoService, private route: ActivatedRoute) {
    this.titleService.setTitle('Mousik - Artist Details');
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.artistParam = params.name;
    });
  }

  async deleteArtist(slug: string): Promise<void> {
    await this.service.deleteArtist(slug);
    window.location.reload();
  }
}
