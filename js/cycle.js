
// while ( num <= 55 ) {
//     console.log(num);
//     num++
// }

// do {
//     console.log(num);
//     num++
// }
// while (num < 55);
// let num = 50;
// for (let i = 1; i<10; i++) {
//     if (i == 6) {
//         break;
//     }
//     console.log(i)
// }



let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count <= 10) {
    alert('Очень мало фильмов');
} else if ( personalMovieDB.count > 11 && personalMovieDB.count <= 30) {
    alert('мало фильмов');
} else {
    alert('вы киноман');
}

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

console.log(personalMovieDB)
