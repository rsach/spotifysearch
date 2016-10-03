import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../spotify.service';
import { Artist } from '../artist';
import { Album } from '../album';

 
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
	id:string;
	artist:Artist [];
	albums:Album [];

  constructor( private _sptfy:SpotifyService, private _route:ActivatedRoute) { }

  ngOnInit() {
  	this._route.params
  		.map(params => params['id'])
  		.subscribe( (id) => {
  			this._sptfy.getArtist(id)
  				.subscribe( artist => {
  					this.artist = artist;
  				}),
  				this._sptfy.getAlbums(id)
  				.subscribe( albums => {
  					this.albums = albums.items;
  				})
  		})


  }

}
