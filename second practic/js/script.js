"use strict";

const numberOfFilms = +prompt("How many films did you see?", "");

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i <= numberOfFilms; i++) {
    const nameFilm = prompt("What was the last film wich you saw?", "");
    const filmRate = prompt("How much do you rate it?", "");
   
    if (nameFilm != null && 
        filmRate != null && 
        nameFilm != "" && 
        filmRate != "" && 
        nameFilm.length < 50) {
        personalMovieDB.movies[nameFilm] = filmRate;
    }   else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("You saw some films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are classic viewer");
} else if (personalMovieDB.count >= 30) {
        console.log("You are film Maniac!");
} else {
    console.log("ERROR");
}

console.log(personalMovieDB);