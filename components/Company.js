const Company = ({ logo, name, originCountry }) => {
  return (
    <div className="bg-gray-900 rounded mr-4">
      {logo ? (
        <img
          width="80"
          alt={name}
          src={`https://image.tmdb.org/t/p/original/${logo}`}
        />
      ) : (
        <h6 className="mr-4">
          {name} <i>{originCountry && `: ${originCountry}`}</i>
        </h6>
      )}
    </div>
  );
};

export default Company;
