import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import 'rxjs';

@Injectable()
export class SpotifyService {
	private searchUrl:string;
	private artistUrl:string;
	private albumUrl:string;
  private alUrl:string;


  constructor( private _http:Http ) { }


  searchMusic(str:string, type="artist"){
  	//this.searchUrl = 'https://api.spotify.com/v1/search?q=tania%20bowra&type=artist';
  	this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US' ; 
  	return this._http.get(this.searchUrl)
  		.map(res => res.json());
  }


  getArtist(id:string){

  		this.artistUrl =      'https://api.spotify.com/v1/artists/'+id; 
  	return this._http.get(this.artistUrl)
  		.map(res => res.json());

  }


  getAlbums(artistId:string){

  		this.albumUrl =      'https://api.spotify.com/v1/artists/'+artistId+'/albums'; 
  	return this._http.get(this.albumUrl)
  		.map(res => res.json());

  }


    getAlbum(id:string){

      this.alUrl =      'https://api.spotify.com/v1/albums/'+id; 
    return this._http.get(this.alUrl)
      .map(res => res.json());

  }
}
