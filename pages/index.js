import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline" 
import Footer from './../components/Footer';
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/*Left*/}
        <div className="flex space-x-4 items-center">
            <p className="link">Sobre</p>
            <p className="link">Loja</p>
        </div>
        {/*Right*/}
        <div className="flex space-x-4 items-center">
            <p className="link">Gmail</p> 
            <p className="link">Imagens</p>
            {/*Icon*/}
            <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-500 cursor-pointer" />

            {/*Avatar*/}
            <Avatar url="https://avatars.githubusercontent.com/u/64236894" /> 
        </div>
      </header>
      {/*Body*/}
      <form className="flex flex-col items-center mt-43 flex-grow w-4/5">
        <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
               height={100}
               width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className=" h-5 mr-3 text-gray-700 " />
          <input 
                ref={searchInputRef}
                type="text" 
                className="flex-grow focus:outline-none"  
          />
          <MicrophoneIcon className="h-5" />
        </div>
      {/*Buttons*/}
        <div className="flex flex-col w-1/2 space-y-2 mt-8  justify-center sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn bg-gray-200 hover:border-gray-200">Google Search</button>

          <button onClick={search} className="btn bg-gray-200 hover:border-gray-200">Estou com sorte</button>
        </div>
      </form>
      {/*Footer*/}
      <Footer />
    </div>
  );
}
