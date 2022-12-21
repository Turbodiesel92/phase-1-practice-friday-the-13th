const url = "http://localhost:3000/movies"

fetch(url)
    .then((response) => response.json())
    .then((movies) => {
        movies.map(renderMovie)
        movies.map(displayInfo)
        displayInfo(movies[0])


    });

function renderMovie(movie) {
    const img = document.createElement('img');
    img.src = movie.image;
    document.querySelector('#movie-list').append(img)
}

function displayInfo(movie) {
    const movieInfo = document.querySelector('#title')
    const yearReleased = document.querySelector('#year-released')
    const description = document.querySelector('#description')
    const detailImage = document.querySelector('#detail-image')
    const watched = document.querySelector('#watched')
    const blood = document.querySelector('#amount')

    movieInfo.textContent = movie.title
    yearReleased.textContent = movie.release_year
    description.textContent = movie.description
    detailImage.src = movie.image
    watched.textContent = movie.watched? "Watched":"Unwatched"
    blood.textContent = movie.blood_amount
}

