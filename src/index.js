fetch(`http://localhost:3000/movies`)
    .then((response) => response.json())
    .then((movies) => {
        console.log(movies)
        movies.forEach(renderMovie)
        movies.forEach(displayInfo)
        displayInfo(movies[0])
    });

function renderMovie(movie) {
    const img = document.createElement('img');
    img.src = movie.image;
    //li.textContent = "hi"
    document.querySelector('#movie-list').append(img)
}

function displayInfo(movie) {
    const movieInfo = document.querySelector('#title')
    const yearReleased = document.querySelector('#year-released')
    const description = document.querySelector('#description')
    const detailImage = document.querySelector('#detail-image')
    movieInfo.innerHTML = movie.title
    yearReleased.innerHTML = movie.release_year
    description.innerHTML = movie.description
    detailImage.src = movie.image

}