class Player {
    constructor (){
        this.tracks = [];
        this.currentTrack = 0;
    }
}

Player.prototype.add = function (str){
    this.tracks.push(str);
};
Player.prototype.play = function (){
    console.log(`artist: ${this.tracks[this.currentTrack].artist}, 
    title: ${this.tracks[this.currentTrack].title},
    album: ${this.tracks[this.currentTrack].album}`);
};
Player.prototype.next = function (){
    if (this.currentTrack === this.tracks.length - 1){
        this.currentTrack = 0;
    } else {
        this.currentTrack++;
    }
};
Player.prototype.previous = function (){
    if (this.currentTrack === 0){
        this.currentTrack = this.tracks.length - 1;
    } else {
        this.currentTrack--;
    }
};

const player = new Player();

class Track {
    constructor (artist, title, album){
        this.artist = artist;
        this.title = title;
        this.album = album;
    }
}

const driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');
const laBambaTrack = new Track('Ritchie Valens', 'La Bamba', 'La Bamba');

player.add(driveTrack);
player.add(laBambaTrack);
player.play();
player.next();
player.play();