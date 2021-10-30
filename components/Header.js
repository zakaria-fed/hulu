import Image from "next/image";
import HeaderItem from "./HeaderItem";

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col p-5 sm:flex-row justify-around items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem link="/" title="HOME" Icon={HomeIcon} />
        <HeaderItem
          link="/?genre=fetchTrending"
          title="TRENDING"
          Icon={LightningBoltIcon}
        />
      </div>

      <Image
        className="object-contain hover:cursor-pointer"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
      {/* Reusable Icons */}
      {/* Logo */}
    </header>
  );
};

export default Header;
