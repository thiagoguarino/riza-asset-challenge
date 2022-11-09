import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTISTS } from '../../helpers/artistsInfo';

@Component({
  selector: 'app-artists-profile',
  templateUrl: './artistsProfile.component.html',
  styleUrls: ['./artistsProfile.component.scss']
})

export class ArtistsProfileComponent implements OnInit {
  artistData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      ARTISTS.filter((artist: any) => {
        if (artist.name === params.name) {
          this.artistData = artist;
        }
      });
    }
  );
  }
}
