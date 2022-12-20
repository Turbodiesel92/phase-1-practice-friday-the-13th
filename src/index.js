fetch ('http://localhost:3000/movies')
.then ((response) => response.json())
.then ((movies) => {
    movies.forEach(movie => {
        showMovieCover(movie)
    })
})


function showMovieCover(movie) {
    console.log('showMovieCover', movie)
    const nav = document.getElementById('movie-list')
    const img = document.getElementById('img')

    // console.log(img)
    console.log(nav)


}

