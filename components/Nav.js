import titles from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(titles).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition transform hover:scale-125 duration-100 hover:text-white active:text-red-500"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      {/* This self closing tag is made to set a shadow in the right corner of the Nav */}
      <div className="h-full w-1/12 absolute top-0 right-0 bg-gradient-to-l from-[#06202A]" />
    </nav>
  );
};

export default Nav;
