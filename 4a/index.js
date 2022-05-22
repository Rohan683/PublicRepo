//API Information
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


// Selecting our Elements.
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

/* call the showMovies function that requests the movie data from the Api using fetch.
 Then it puts those data in the main HTML tag by creating elments for those data. */
showMovies(apiUrl);
function showMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    data.results.forEach(element => {
      // Creating elemnts for our data inside the main tag. 
        const text = document.createElement('h1');
        const el = document.createElement('div');
        const image = document.createElement('img');
        

        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(text);
        el.appendChild(image);
        main.appendChild(el);
    }); 
});
}

// Prevent the Form from submitting if the search bar is empty.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
     
    const searchTerm = search.value;
 /* Adding the value written in the search bar to the search Api,so we can  get the movie we searched for. */
    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});
