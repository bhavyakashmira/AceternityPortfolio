"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { RiHome2Line } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa6";
import Link from "next/link";
import { GrResume } from "react-icons/gr";
import hello from "../../public/Hero.png"


const words = `Frontend developer skilled in React, Node.js, Firebase. Passionate about problem-solving. Embraces challenges and excels in crafting effective solutions. 
`;


export function LandingPage() {
    return (
        <div className="bg-black">
            <div className="flex justify-between h-[4rem] md:h-[3rem] items-center m-2">
                <a href="#" className="text-[#EDF5FC] font-robot md:text-xl " >HomePage</a>
                <nav aria-label="Breadcrumb  ">
                    <ol className="flex items-center gap-1 font-robot md:text-2xl text-white">
                        <li>
                            <a href="/last_resume.pdf" className=" block transition hover:text-gray-700">
                             Resume
                            </a>
                        </li>

                        <li className="">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </li>

                        <li>
                            <a href="#projects" className="block transition hover:text-gray-700"> Projects </a>
                        </li>

                        <li className="rtl:rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </li>

                        <li>
                            <a href="#contact" className="block transition hover:text-gray-700"> Contact </a>
                        </li>
                    </ol>
                </nav>
            </div>
        
           
            <div className=" sm:m-0 h-[50rem] md:h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased ">
                <div className="" >
                    <div className="   max-w-2xl mx-auto p-4">
                        <div className=" m-10  font-bold font-landing relative z-20 bg-clip-text text-transparent text-wrap  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" >
                            <TextGenerateEffect className="" words={words} />
                        </div>
                    </div>
                </div>
                <div><BackgroundBeams /></div>
            </div>
            
        </div>
       
    );
}
