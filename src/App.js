import { useEffect, useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];



const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const  KEY="a477e116";


export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  // const [isLoading,setLoading]=useState(false);
  // const[error,setError]=useState("");
  const query="interstellar";


  // // sync queries with data\\
  useEffect(function(){
    console.log("after initial render until unmount");
  },[]);
  useEffect(function(){
    console.log("after every render");
  });
  useEffect(function(){
    console.log("popcorn");
  },[query]);
  console.log("during render");

useEffect(
function(){
fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
.then((res)=>res.json())
.then((data)=>setMovies(data.Search));
}
,[]);
// //  async await use kora hoise jate prom 
// useEffect (function(){
//   async function fetchMovies(){
//     //  try {setLoading(true);
//     const res= await fetch(`http://www.omdbapi.com/?apikey=${KEY}& s=interstellar`);
  
//     // if(!res.ok)
//       // throw new Error("movie data is not found");
//     // ei msg ta screen e display korate state nite hobe ja state change korbe condition fullfill na korle

//     const data=await res.json();

//     // if (data.response==='false')
//     //   throw new Error("buffer not loading");
//     setMovies(data.Search);
//     setLoading(false);

//     // console.log(data.Search);

//      }

//   fetchMovies();

// },[]);


  return (
    <>
    <Navbar>
        <Search
        //  query={query} setQuery={setQuery}
         />
        <Logo/>
        <NumResults movies={movies}/>
    </Navbar>
    <Main> 
{/* {/* using element={} explicitly rather than  children
<Box element={<MovieList movies={movies}/>}/>
<Box
element={
  <>
  <WatchedSummary watched={watched}/>
           <WatchedMovieList watched={watched}/>
  </>
}
/> */}

 {/* */}

      <Box>
          <MovieList movies={movies}/>
           {/* {isLoading && <Loading/>} 
           {!isLoading && !error && <MovieList movies={movies}/>}
         
           {error && <ErrorMessage message={error}/>} */}
        
      </Box>
      <Box>
        <>
           <WatchedSummary watched={watched}/>
           <WatchedMovieList watched={watched}/>
           </>
      </Box> 
    </Main>

       </>
  );
}
function Navbar({children}){
  return(
    <nav className="nav-bar">
{children}
      </nav>
  );
}
// effect hook part er jonne
function Loading(){
return(
  <p className="loader">Loading...</p>
);
}
function ErrorMessage({message}){
  return(
    <p className="error">
      <span>⛔</span>
      {message}
    </p> 
  )
}
// \\

function Logo(){
  return(
  <div className="logo">
    <span role="img">🍿</span>
    <h1>usePopcorn</h1>
  </div>
  );
}

function Search()
  // {query,setQuery})

{
  const [query, setQuery] = useState("");

    return(
  <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
    );
}

function NumResults({movies}){
  return(
    <p className="num-results">
    Found <strong>{movies.length}</strong> results
  </p>
  );
}


//\/ /\\
function Main({children}){
  return(
    <main className="main"> 
  {children}
    </main>
  );
}
function Box({children}){
  const [isOpen, setIsOpen] = useState(true);
  return(
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

// function WatchedBox({children}){
//   const [isOpen2, setIsOpen2] = useState(true);
  
//   return(
    
//     <div className="box">
//       <button
//         className="btn-toggle"
//         onClick={() => setIsOpen2((open) => !open)}
//       >
//         {isOpen2 ? "–" : "+"}
//       </button>
//       {isOpen2 && (children)}
//     </div>
//   );
// }

// movielist eita listbox er children tai opne and close listbx e parent compo te jeye prop hisebe pass korai disi eita
function MovieList({movies}){
  return(
    <ul className="list">
    {movies?.map((movie) => (
     <Movie movie={movie}
     key={movie.imdbID}
     />
    ))}
  </ul>
  );
}

// \\
function Movie({movie}){
  return(
    <li key={movie.imdbID}>
    <img src={movie.Poster} alt={`${movie.Title} poster`} />
    <h3>{movie.Title}</h3>
    <div>
      <p>
        <span>🗓</span>
        <span>{movie.Year}</span>
      </p>
    </div>
  </li>
  );
}

function WatchedSummary({watched}){
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return(
    <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>{watched.length} movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>{avgImdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{avgUserRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{avgRuntime} min</span>
              </p>
            </div>
          </div>
  );
}

function WatchedMovieList({watched}){
  return(
    <ul className="list">
    {watched.map((movie) => (
            <WatchedMovie movie={movie} key={movie.imdbID}/>
      
    ))}
  </ul>
  );
}

function WatchedMovie({movie}){
  return(
    <li key={movie.imdbID}>
    <img src={movie.Poster} alt={`${movie.Title} poster`} />
    <h3>{movie.Title}</h3>
    <div>
      <p>
        <span>⭐️</span>
        <span>{movie.imdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{movie.userRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{movie.runtime} min</span>
      </p>
    </div>
  </li>

  );
}

