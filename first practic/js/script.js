"use strict";

const numberOfFilms = +prompt("How many films did you see?", "");

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const nameFilm1 = prompt("What was the last film wich you saw?", ""),
      ocenkaFilm1 = prompt("На сколько вы его оцениваете?", ""),
      nameFilm2 = prompt("What was the last film wich you saw?", ""),
      ocenkaFilm2 = prompt("На сколько вы его оцениваете?", "");

personalMovieDB.movies[nameFilm1] = ocenkaFilm1;
personalMovieDB.movies[nameFilm2] = ocenkaFilm2;

console.log(personalMovieDB);