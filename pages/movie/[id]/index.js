const movie = ({ movie }) => {
  return <div>{console.log(movie)}</div>;
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
