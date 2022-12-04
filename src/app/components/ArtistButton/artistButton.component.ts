import { Component, OnInit, Input } from '@angular/core';
import { ArtistsInfoService } from '../../services/mousik.services';

@Component({
  selector: 'app-artist-button',
  templateUrl: './artistButton.component.html',
  styleUrls: ['./artistButton.component.scss']
})

export class ArtistButtonComponent implements OnInit {

  @Input() title: string;
  @Input() rota?: string;
  @Input() tipoBotao: string; //submit ou button

  service: ArtistsInfoService;

  constructor() { }

  ngOnInit(): void {

  }

}
