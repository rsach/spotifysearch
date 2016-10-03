import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../spotify.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
	searchStr:string;
	searchRes:Artist [];

  constructor( private _sptfy:SpotifyService ) { }

  ngOnInit() {
  }

searchMusic(){
		this._sptfy.searchMusic(this.searchStr)
			.subscribe( res =>{
					this.searchRes = res.artists.items;
					console.log(this.searchRes);
			});

	}
}
