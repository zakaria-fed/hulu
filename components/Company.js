import Image from "next/image";

const Company = ({ logo, name, originCountry }) => {
  return (
    <div
      className="flex-1 md:flex-none relative h-32 w-60"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${logo}`}
        className="rounded-full"
        layout="fill"
      />
    </div>
  );
};

export default Company;
