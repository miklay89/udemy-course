/* Задания на урок:

+1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

+2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

+4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики


'use strict';

document.addEventListener(`DOMContentLoaded`, () => {const movieDB = {
   
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const elementsAdv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkBox = addForm.querySelector(`[type="checkbox"]`);

addForm.addEventListener (`submit`, (e) => {   
    e.preventDefault();
    let filmName = addInput.value;
    let favour = checkBox.checked;

    if (filmName) {
        if (favour) {
            console.log("Добавляем любимый фильм");
        }
        if (filmName.length > 21) {
            filmName = filmName.slice(0, 20) + `...`;
        }

        movieDB.movies.push(filmName);
        createMovieList(movieDB.movies, movieList);
     }
   
    e.target.reset();
});

function createMovieList (films, parent) {
    parent.innerHTML = ``;
    sortArr(movieDB.movies);

films.forEach((film, i) => {
    parent.innerHTML += ` 
        <li class="promo__interactive-item"> ${i + 1}. ${film}
            <div class="delete"></div>
        </li>
        `;
});

document.querySelectorAll(`.delete`).forEach((btn, i) => {
    btn.addEventListener(`click`, () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);
    });
});

}

createMovieList(movieDB.movies, movieList);

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

deleteAdv(elementsAdv);

const makeChanges = () => {
    genre.textContent = "Драмма";
    
    poster.style.backgroundImage = `url("img/bg.jpg")`;
};

makeChanges();

function sortArr (arr) {
    arr.sort();
}



});