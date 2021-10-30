import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center">
      {results.results.map((film) => (
        <Thumbnail key={film.id} result={film} />
      ))}
      {console.log(results)}
    </FlipMove>
  );
};

export default Results;
