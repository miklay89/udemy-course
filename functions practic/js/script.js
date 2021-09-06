"use strict";

let numberOfFilms;

function strat () {
    numberOfFilms = +prompt("How many films did you see?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films did you see?", "");
    }
}

strat();

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms () {
    for (let i = 0; i <= 2; i++) {
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
}

rememberMyFilms();

function writeYourGenres() {
    for (let j = 1; j <=3; j++) {
        personalMovieDB.genres[j - 1] = prompt(`Your's favorite genre is ${j}`, ``);
    }
}

writeYourGenres();

 function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("You saw some films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are classic viewer");
    } else if (personalMovieDB.count >= 30) {
            console.log("You are film Maniac!");
    } else {
        console.log("ERROR");
    }
 }

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);







