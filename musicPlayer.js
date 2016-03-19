
// create library class
var Library = function(){
	this.storage = [];
};

var lib = new Library();

// playlist should be an instance of library
var playlist = new Library(); 

// NewSong class -- will create an object with newsong properties
var NewSong = function(artist, title, album, art){
	this.artist = artist;
	this.title = title;
	this.album = album;
	this.art = art;
};

function addSongToLibrary(artist, title, album, art){
	// check if song exists already in library
	var songObj = {
		artist: artist,
		title: title,
		album: album,
		art: art
	};
	// check if song in lib
	if (songObj in lib.storage){
		return;
	}
	// if song not in library then add it
	else{
	lib.storage.push(new NewSong(artist, title, album, art));	
	}
}

function removeSongFromLibrary(artist, title){
	var index;
	for (var i = 0; i < lib.storage.length; i++){
		if((lib.storage[i].artist === artist) && (lib.storage[i].title === title)){
			index = i;
			break;
		}
	}
	if (index !== undefined){
		lib.storage.splice(index, 1);
		console.log(lib);
	}
	else{
		console.log("Song not found in library!");
	}

	// PUT IN IF SOMEHTHING IS REMOVED FROM LIB & IT'S IN PLAYLIST,
	// THEN REMOVE IT FROM PLAYLIST
}

function addSongToPlaylist(artist, title, album, art){
	
	// check if song is in library before adding to playlist, if it is push it in to playlist
	for (var i = 0; i < lib.storage.length; i++){
		if((lib.storage[i].artist === artist) && (lib.storage[i].title === title)){
			playlist.storage.push(new NewSong(artist, title, album, art));
			return;
		}
	}

	return console.log('song not in library');
}

function removeSongFromPlaylist(artist, title){
	var index;
	for (var i = 0; i < playlist.storage.length; i++){
		if((playlist.storage[i].artist === artist) && (playlist.storage[i].title === title)){
			index = i;
			break;
		}
	}
	if (index !== undefined){
		playlist.storage.splice(index, 1);
		console.log(playlist);
	}
	else{
		console.log("Song not found in library!");
	}

}


// USER CONTROLS

function shufflePlaylist(){
	var copyStorage = playlist.storage.slice(0); //0 is faster than nothing
    for (var i = copyStorage.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copyStorage[i];
        copyStorage[i] = copyStorage[j];
        copyStorage[j] = temp;
    }
    playlist.storage = copyStorage;
}

var current = [];
// initial song number starting point
var numberSong = 0;

function currentSong(){
	if(current.length === 0){
		current.push(playlist.storage[0]);
	}
	console.log('The current song is, ', current[current.length-1]);
}

function startSong(number){

	if(number > playlist.storage.length){
		return console.log("Oops, there's not even that many songs in the playlist!");
	}


	else {
		numberSong = number;
		current.push(playlist.storage[number]);
		console.log('The current song is, ', current[current.length-1]);
	}
}

function nextSong(){
	if(numberSong++ > playlist.storage.length){
		console.log("Need to add more songs to playlist first!");
	}
	else{
		numberSong++;
		current.push(playlist.storage[numberSong]);
	}
}

function pauseSong(){
	current.push('Paused. Pass resumeSong() to unpause.');
	console.log(current[current.length-1]);
}

function resumeSong(){
	if(current[current.length-1] === 'Paused. Pass resumeSong() to unpause.'){
		current.splice(current.length-1, 1);
		console.log('The current song is, ', current[current.length-1]);
	}
	else{
		console.log("There's nothing to resume! It's playing!");
	}
}
