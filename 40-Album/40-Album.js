"use strict";
/*40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(AlbumArtistName, AlbumName) {
    return { AlbumArtistName, AlbumName };
}
console.log(make_album("Shafqat Amanat Ali Khan", "kyun Dooriyan"));
//add optional parameters Number of tracks
function make_album2(ArtisName, AlbumTitle, numberOfTracks) {
    return { ArtisName, AlbumTitle, numberOfTracks };
}
console.log(make_album2("Shafqat Amanat Ali Khan", "Kyun Dooriyan", 5));
console.log(make_album2("Rahat Fateh Ali Khan", "Yeh Jo Halka Halka Saroor Hai", 4));
console.log(make_album2("Atif Aslam", "Tera Hone Laga Hoon", 50));
