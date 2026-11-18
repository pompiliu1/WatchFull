
// WATCHFULL - MAIN JAVASCRIPT FILE

// Get saved movies from localStorage
let movies = JSON.parse(localStorage.getItem("movies")) || [];

// Save movies to localStorage
function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movies));
}

// Display a message in the console
console.log("WatchFull JavaScript is connected!");
console.log("Saved movies:", movies);


// Get the Add Movie form from the HTML document.
const addMovieForm = document.getElementById("add-movie-form");
// Check if the Add Movie form was found.
console.log("Add Movie form:", addMovieForm);

// Check if the Add Movie form exists on the current page.
if (addMovieForm) {

    // Listen for the form submission event.
    addMovieForm.addEventListener("submit", function(event) {

        // Prevent the browser from refreshing the page.
        event.preventDefault();

        // Get the values entered by the user in the form fields.
        const title = document.getElementById("movie-title").value;
        const year = document.getElementById("movie-year").value;
        const genre = document.getElementById("movie-genre").value;

        // Create a new movie object using the form information.
const newMovie = {
    id: Date.now(),
    title: title,
    year: Number(year),
    genre: genre,
    watched: false,
    rating: null,
    review: "",
    dateAdded: new Date().toISOString()
};

// Add the new movie to the movies array.
movies.push(newMovie);

// Save the updated movie collection in localStorage.
saveMovies();

// Get the success message element from the HTML document.
const successMessage = document.getElementById("success-message");

// Display a confirmation message after the movie is saved.
successMessage.textContent = "Movie added successfully!";

// Hide the confirmation message after 2 seconds.
setTimeout(function() {
    successMessage.textContent = "";
}, 2000);

// Display a confirmation message in the console.
console.log("Movie added successfully:", newMovie);

// Clear the form fields after adding the movie.
addMovieForm.reset();
    });
}


// Get the movie list container from the HTML document.
const movieList = document.getElementById("movie-list");

// Get the watched movie list container from the HTML document.
const watchedMovieList = document.getElementById("watched-movie-list");

// Display all saved movies on the My Movies page.
function displayMovies() {

    // Check if the movie list container exists on the current page.
    if (!movieList) {
        return;
    }

    // Clear the container before displaying the movies.
    movieList.innerHTML = "";

    // Display a message if the collection is empty.
    if (movies.length === 0) {
        movieList.textContent = "No movies added yet.";
        return;
    }

    // Go through every movie in the saved collection.
    movies.forEach(function(movie) {

        // Create a card for the current movie.
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        // Create and display the movie title.
        const movieTitle = document.createElement("h4");
        movieTitle.textContent = movie.title;

        // Create and display the movie release year.
        const movieYear = document.createElement("p");
        movieYear.textContent = "Release Year: " + movie.year;

        // Create and display the movie genre.
        const movieGenre = document.createElement("p");
        movieGenre.textContent = "Genre: " + movie.genre;

        // Add the movie information to the card.
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieYear);
        movieCard.appendChild(movieGenre);

        // Create a button to mark the movie as watched.
        // Check if the movie has already been watched.
        if (!movie.watched) {

            // Create a button to mark the movie as watched.
            const watchedButton = document.createElement("button");

            // Set the button text.
            watchedButton.textContent = "Mark as Watched";

            // Listen for clicks on the button.
            watchedButton.addEventListener("click", function() {

                // Mark the current movie as watched.
                movie.watched = true;

                // Save the updated movie collection.
                saveMovies();

                // Refresh the movie cards.
                displayMovies();
            });

            // Add the button to the movie card.
            movieCard.appendChild(watchedButton);

        } else {

            // Display the watched status instead of the button.
            const watchedStatus = document.createElement("p");
            watchedStatus.textContent = "Status: Watched";
            movieCard.appendChild(watchedStatus);
        }

        // Add the completed card to the movie list.
        movieList.appendChild(movieCard);
    });
}

// Display the movies when the page loads.
displayMovies();

// Display only the movies marked as watched.
function displayWatchedMovies() {

    // Check if the watched movie list container exists on the current page.
    if (!watchedMovieList) {
        return;
    }

    // Clear the container before displaying the movies.
    watchedMovieList.innerHTML = "";

    // Filter the collection to keep only watched movies.
    const watchedMovies = movies.filter(function(movie) {
        return movie.watched === true;
    });

    // Display a message if there are no watched movies.
    if (watchedMovies.length === 0) {
        watchedMovieList.textContent = "No watched movies yet.";
        return;
    }

    // Go through every watched movie.
    watchedMovies.forEach(function(movie) {

        // Create a card for the watched movie.
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        // Create and display the movie title.
        const movieTitle = document.createElement("h4");
        movieTitle.textContent = movie.title;

        // Create and display the movie release year.
        const movieYear = document.createElement("p");
        movieYear.textContent = "Release Year: " + movie.year;

        // Create and display the movie genre.
        const movieGenre = document.createElement("p");
        movieGenre.textContent = "Genre: " + movie.genre;

        // Display the watched status.
        const movieStatus = document.createElement("p");
        movieStatus.textContent = "Status: Watched";

        // Add all movie information to the card.
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieYear);
        movieCard.appendChild(movieGenre);
        movieCard.appendChild(movieStatus);

        // Add the completed card to the watched movie list.
        watchedMovieList.appendChild(movieCard);
    });
}

// Display watched movies when the page loads.
displayWatchedMovies();

