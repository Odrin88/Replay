let numberOfFilms;

let start = () => {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let detectPersonalLevel = () => {
    if (personalMovieDB.count <= 10) {
        alert('Очень мало фильмов');
    } else if ( personalMovieDB.count > 11 && personalMovieDB.count <= 30) {
        alert('мало фильмов');
    } else if (personalMovieDB.count > 30) {
        alert('вы киноман');
    } else {
        alert('Error')
    }
}
// detectPersonalLevel();

let rememberMyFilm = () => {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilm();



let writeYourGenres = () => {
    for (let i = 1; i <= 3; i++) {
        let gen = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(gen);
    }
}

writeYourGenres();

let showMyDB = (hidden) => {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

