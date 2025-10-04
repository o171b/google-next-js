import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HomeHeader />

    <div className="flex flex-col items-center mt-26">
      <Image
      src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/280px-Google_2015_logo.svg.png'}
      alt="Google Logo"
      width={300}
      height={300}
      priority
      style={{width: 'auto'}}
      >
      </Image>
      <HomeSearch />
    </div>
    </>
  );
}
