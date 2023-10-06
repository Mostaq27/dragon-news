import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/Rightsidenav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";


const News = () => {

   const [findNews,setFindNews]= useState({})

    const { id } = useParams();
    useEffect(() => {
        fetch("/news.json")
            .then(result => result.json())
            .then(data => {
                const foundNews = data.find(aNews => aNews._id === id);
                setFindNews(foundNews); // Update findNews with the found news item
            });
    }, [id]);
  
    console.log(findNews)
   

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="taxt-5xl">News details</h2>
                    <p>{id}</p>


                 

                    <div class="relative mt-6 flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div class="p-6">
                            <img className="w-full mx-auto" src={findNews.thumbnail_url} alt="" />
                            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {findNews.title}
                            </h5>
                            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                               {findNews.details}
                            </p>
                        </div>
                        <div class="p-6 pt-0">
                            <a
                                class="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                                href="#"
                            >
                                <Link to="/">
                                <button
                                    class="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-dark="true"
                                >
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button>
                                </Link>
                            </a>
                        </div>
                    </div>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};
export default News;