
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
