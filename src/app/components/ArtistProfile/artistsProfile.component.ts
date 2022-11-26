import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/interfaces/Artist';
import { ARTISTS } from '../../helpers/artistsInfo';

@Component({
  selector: 'app-artists-profile',
  templateUrl: './artistsProfile.component.html',
  styleUrls: ['./artistsProfile.component.scss']
})

export class ArtistsProfileComponent implements OnInit {
  artistData: Artist[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      ARTISTS.filter((artist: any) => {
        if (artist.slug === params.name) {
          this.artistData = artist;
        }
      });
    }
  );
  }
}
