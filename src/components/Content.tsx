import { MovieCard } from '../components/MovieCard';


interface MovieProps {
  movie: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>,
  genreTitle: string
}

export function Content(props: MovieProps | undefined) {
  // Complete aqui
  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {props?.genreTitle}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props?.movie ? props.movie.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            )) : <div />}
          </div>
        </main>
      </div>
  )
}