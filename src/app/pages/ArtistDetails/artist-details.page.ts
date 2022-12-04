import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/interfaces/Artist';
import { ArtistsInfoService } from '../../services/mousik.services';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.page.html',
  styleUrls: ['./artist-details.scss'],
})

export class ArtistDetailsPage implements OnInit {
  artistParam: string;
  artistData: Artist;

  constructor(private service: ArtistsInfoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.artistParam = params.name;
    });
  }

  async deleteArtist(slug: string): Promise<void> {
    await this.service.deleteDocument(slug);
    window.location.reload();
  }
}
