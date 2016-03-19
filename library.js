//   - A library can have songs added/removed and cannot have duplicates
//   - A song needs to have a title, artist, album name, and cover art


var NewSong = function(artist, song, album, art){
	this.artist = artist;
	this.song = song;
	this.album = album;
	this.art = art;
};

var library = [];

