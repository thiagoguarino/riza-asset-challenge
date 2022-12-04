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
  artistData: Artist;

  constructor(private route: ActivatedRoute, private service: ArtistsInfoService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.artistParam = params.name;
    });
    this.getOneArtist(this.artistParam);
  }

  getOneArtist(slug: string): void {
    this.artistData =  this.service.getOneDocument(slug).then((doc: { exists: any; data: () => Artist }) => {
      if (doc.exists) {
          this.artistData = doc.data();
      } else {
          return 'Doc does not exits';
      }
   });
  }
}
