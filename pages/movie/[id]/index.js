import Company from "../../../components/Company";
import MovieStyles from "../../../styles/Movie.module.css";

const movie = ({ movie }) => {
  return (
    <div className={MovieStyles.movie}>
      <header
        className={`${MovieStyles.movie__header} movie__header h-80 xl:h-96 flex items-center justify-center`}
      >
        <div
          className={`${MovieStyles.movie__header__left} movie__header__left w-40 h-60 rounded hover:scale-105 cursor-pointer`}
        ></div>
        <div className="movie__header__right ml-5 text-left	">
          <h2 className="font-bold">
            {movie.title} ({movie.release_date})
          </h2>
          <div className="flex">
            {movie.genres.map((genre) => (
              <h6 key={genre.id} className="last:ml-2 last:mr-2 font-extralight">
                {genre.name}
              </h6>
            ))}
            • {movie.runtime} min
          </div>
          <div className="flex items-center">
            <h6 className="font-bold">{movie.vote_average}</h6>
            <h6 className="ml-2 font-black text-xs">Vote Average</h6>
          </div>
          <h3 className="text-base font-bold mt-4">Overview</h3>
          <p className="leading-5	mt-3 w-80">
            {movie.overview}
          </p>
        </div>
      </header>

      <main>
        <section className="p-4">
          <h3 className="text-lg font-semibold">Production Companies</h3>

          {/* Companies */}
          <div className="companies flex">
            {movie.production_companies.map(comp => (
              <Company logo={comp.logo_path} key={comp.id} />
            ))}
          </div>
        </section>
      </main>

      {console.log(movie)}
      <style jsx>
        {`
          .movie__header {
            background-image: url(https://image.tmdb.org/t/p/original/${movie.backdrop_path});
          }
          .movie__header__left {
            background-image: url(https://image.tmdb.org/t/p/original/${movie.poster_path});
          }
        `}
      </style>
    </div>
  );
};

export default movie;

export const getServerSideProps = async (context) => {
  const fetching = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=0a4354332139bca9062d188d8daf1381&language=en-US`
  );

  const movieResp = await fetching.json();

  return {
    props: {
      movie: movieResp,
    },
  };
};
