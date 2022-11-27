import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/interfaces/Artist';
import { ArtistsInfoService } from 'src/app/services/mousik.services';

@Component({
  selector: 'app-artists-profile',
  templateUrl: './artistsProfile.component.html',
  styleUrls: ['./artistsProfile.component.scss']
})

export class ArtistsProfileComponent implements OnInit {
  artistParam: string;
  public artistData: Artist;

  constructor(private route: ActivatedRoute, private service: ArtistsInfoService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.artistParam = params.name;
    });
    this.getOneArtist(this.artistParam);
  }

  // using mousik services function to get data from firestore
  async getOneArtist(slug: string): Promise<void> {
    await this.service.getOneArtistInfo(slug).then(result => {
      this.artistData = result;
    });
  }
}
