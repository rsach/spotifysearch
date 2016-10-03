import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../spotify.service';
import { Album } from '../album';
import { Artist } from '../artist';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit {

	id:string;
	album:Album [];

  constructor( private _sptfy:SpotifyService , private _route:ActivatedRoute ) { }

  ngOnInit() {

  	this._route.params
  		.map( params => params['id'])
  		.subscribe( (id) => {
  			this._sptfy.getAlbum(id)
  				.subscribe(album => {
  					this.album = album;
  				})
  		})
  }

}
