import { Component, Input, OnInit, Output } from '@angular/core';
import { Artist } from 'src/app/interfaces/Artist';
import { ArtistsInfoService } from 'src/app/services/mousik.services';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-artists-form',
  templateUrl: './artistForm.component.html',
  styleUrls: ['./artistForm.component.scss']
})

export class ArtistFormComponent implements OnInit {
  @Input() rota: string;
  @Input() title: string;
  form: FormGroup;
  allArtists: Artist[];
  artistParam: string;
  artistData: Artist;

  constructor(private route: ActivatedRoute, private service: ArtistsInfoService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.artistParam = params.name;
    });
    this.getArtists();
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup<any> ({
      id: new FormControl<number> (0),
      name: new FormControl<string> (''),
      photo: new FormControl<string> (''),
      altText: new FormControl<string> (''),
      slug: new FormControl<string> (''),
    });
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

  updateArtist(): void {
    this.service.updateDocument(this.artistParam, this.artistData);
  }

  createArtist(): void {
    this.service.createDocument(this.artistData.slug, this.artistData);
  }

  onSubmit(): void {
    this.artistData = this.form.value;
    const artistsArr = this.allArtists;
    const artistCheck = artistsArr.find(obj => obj.slug === this.artistData.slug);
    if (artistCheck) {
      this.updateArtist();
      this.form.reset();
    } else {
      this.createArtist();
      this.form.reset();
    }
  }
}
