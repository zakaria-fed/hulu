import Link from "next/link"

const HeaderItem = ({ title, Icon }) => {
  return (
    <Link href="/">
      <div className="flex flex-col items-center group cursor-pointer w-12">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 animate-bounce tracking-widest">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default HeaderItem;
