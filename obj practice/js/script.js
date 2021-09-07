"use strict";

const personalMovieDB ={
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt("How many films did you see?", "");
        while (personalMovieDB.count == "" || 
        personalMovieDB.count == null || 
        isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films did you see?", "");
        }
    },
    
    rememberMyFilms: function () {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("You saw some films");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are classic viewer");
        } else if (personalMovieDB.count >= 30) {
                console.log("You are film Maniac!");
        } else {
            console.log("ERROR");
        }
    },

    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Your's favourite genre ${i}`);
            if (genre === '' || genre == null) {
                console.log('You didn\`t input anything');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Favourite genre ${i + 1} is ${item}`);
    });
    }

};