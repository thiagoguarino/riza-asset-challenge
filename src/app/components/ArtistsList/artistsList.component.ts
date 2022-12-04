import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/Artist';
import { ArtistsInfoService } from 'src/app/services/mousik.services';
import { map } from 'rxjs/operators';

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

  getArtists(): void {
    this.service.getAllDocuments().snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map((c: { payload: { doc: { id: number; data: () => Artist } } }) =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.allArtists = data;
    });
  }
}
