const url = "http://localhost:3000/movies"
let currentMovie

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
    img.addEventListener('click', e => {
        displayInfo(movie)
    })
}

function displayInfo(movie) {
    currentMovie = movie
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

const watched = document.querySelector('#watched')
watched.addEventListener('click', e => {
    currentMovie.watched = !currentMovie.watched
    e.target.textContent = currentMovie.watched ? "Watched" : "Unwatched"
    handlePatch(currentMovie)
})

const form = document.querySelector('#blood-form')
form.addEventListener('submit', (e) => {
    const amount = document.querySelector('#amount')
    e.preventDefault()
    currentMovie.blood_amount = parseInt(amount.textContent, 10) + parseInt(e.target['blood-amount'].value)
    amount.textContent = currentMovie.blood_amount
    handlePatch(currentMovie)
})
function handlePatch(movie) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(movie),
    }
    fetch(`${url}/${currentMovie.id}`, options)
        .then((response) => response.json())
        .then((movie) => {
            console.log('Sucess', movie)
        })
        .catch((error) =>{
            console.log('Error', error)
        })

}