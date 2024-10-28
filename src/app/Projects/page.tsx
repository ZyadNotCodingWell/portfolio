"use client"
import Image from "next/image";
import { Inconsolata, Quicksand  } from "next/font/google";
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Folder } from "../Componenets/svgAssets";
import Link from "next/link";

const montserrat = Quicksand({subsets: ["latin"], weight: ["400", "700"]})

const Projects = [
  {
    name: "NextView",
    description: "Website for appointment booking with a pionnering company dedicated to AI integration in automobile models' dashboards. Built on NextJs and Frmaer Motion.",
    image1: "/images/project1_1.jpg",
    image2: "/images/project1_2.jpg",
    link: "https://www.youtube.com"
  },
  {
    name: "Project 2",
    description: "This is a description of project 2",
    image1: "/images/project2_1.jpg",
    image2: "/images/project2_2.jpg",
    link: "https://www.example.com/project2"
  },
  {
    name: "Project 3",
    description: "This is a description of project 3",
    image1: "/images/project3_1.jpg",
    image2: "/images/project3_2.jpg",
    link: "https://www.example.com/project3"
  },
  {
    name: "Project 4",
    description: "This is a description of project 4",
    image1: "/images/project4_1.jpg",
    image2: "/images/project4_2.jpg",
    link: "https://www.example.com/project4"
  },
  {
    name: "Project 5",
    description: "This is a description of project 5",
    image1: "/images/project5_1.jpg",
    image2: "/images/project5_2.jpg",
    link: "https://www.example.com/project5"
  },
  {
    name: "Project 6",
    description: "This is a description of project 6",
    image1: "/images/project6_1.jpg",
    image2: "/images/project6_2.jpg",
    link: "https://www.example.com/project6"
  },
  {
    name: "Project 7",
    description: "This is a description of project 7",
    image1: "/images/project7_1.jpg",
    image2: "/images/project7_2.jpg",
    link: "https://www.example.com/project7"
  },
  {
    name: "Project 8",
    description: "This is a description of project 8",
    image1: "/images/project8_1.jpg",
    image2: "/images/project8_2.jpg",
    link: "https://www.example.com/project8"
  },
  {
    name: "Project 9",
    description: "This is a description of project 9",
    image1: "/images/project9_1.jpg",
    image2: "/images/project9_2.jpg",
    link: "https://www.example.com/project9"
  },
  {
    name: "Project 10",
    description: "This is a description of project 10",
    image1: "/images/project10_1.jpg",
    image2: "/images/project10_2.jpg",
    link: "https://www.example.com/project10"
  },
];

export default function Project() {
  const text = "Fetching projects... ";
  const [currentIndex, setCurrentIndex] = useState(0);
	const [projectStates, setProjectStates] = useState(Array(Projects.length).fill(false));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
    }, 130);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

	const handleClick = (index: number) => {
    setProjectStates((prevStates) => {
      const newStates = Array(Projects.length).fill(false); // Reset all to false
      newStates[index] = true; // Set the clicked one to true
      return newStates;
    });
  };

  return (
        <section className="flex w-full h-full cursor-default">

          <div className={twMerge(`relative flex w-fit text-green-600 flex-col font-semibold my-6 mx-4`,montserrat.className)}>
            <div className="relative mt-8 flex w-fit max-w-8xl">
              C:&gt; Hi, my name is Zyad Cherkaoui, I am a front-end developer, and a data-science student in Paris. 
            </div>
            <div className="flex flex-row w-fit relative items-center">
              <p>C:&gt; {text.slice(0,currentIndex)}</p>
              <motion.div className="absolute right-0 top-0 w-0.5 h-5 bg-green-600" initial={{opacity: 0}} animate={{
              opacity: [1,0,1]}} transition={{duration: 1.4, ease: "backInOut", repeat: Infinity}}></motion.div>
            </div>
						
          </div>
						<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0, delay: 3.5}} className="absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-between rounded-xl border border-white/20 bg-neutral-800 self-center mx-auto w-[140%] h-[135%] ">
							<div className="flex w-full h-full flex-row gap-0 relative">
								<div id="projects_sidebar" className="bg-zinc-900 flex flex-col flex-none caret-transparent min-w-[20%] max-w-[20%] z-10 rounded-bl-xl py-8 mt-8 px-0 gap-2.5 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-800">
									<div className="text-lg tracking-wider px-6 py-1 w-full font-extrabold text-white/70 flex">Projects Explorer</div>
									{Array(Projects.length).fill(0).map((_, index) => (
									  <div key={index} onClick={() => handleClick(index)} className={ projectStates[index] ? "cursor-pointer bg-gradient-to-r from-fuchsia-700 to-violet-700/20 via-violet-500/40 text-lg tracking-wider px-6 py-1 w-full flex caret-transparent" : "caret-transparent cursor-pointer bg-transparent text-lg text-white/60 flex hover:text-white transition duration-300 tracking-wider px-6 py-1 w-full"  }>{Projects[index].name}</div>
									))}
								</div>

								<div id="projects_viewer" className="bg-zinc-800 flex flex-col h-full min-w-[80%] max-w-[80%] z-10 rounded-r-xl">
									{Array(Projects.length).fill(0).map((_, index) => (
										<div key={index} className={projectStates[index] ? "flex justify-start gap-4 w-full h-full overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-700 p-16 flex-col" : "hidden"}>
											<div className="flex-full w-full text-3xl text-white/50 font-semibold tracking-wide">{Projects[index].name}</div>
											<div className="flex-full text-white/25 text-xl w-full">{Projects[index].description}</div>
											<div className="w-full h-full mt-8">
												<Image src={Projects[index].image1} alt={Projects[index].image1} width={2000} height={1000} className="object-contain rounded-xl"/>
											</div>
											<div className="w-full h-full mt-4">
												<Image src={Projects[index].image2} alt={Projects[index].image2} width={2000} height={1000} className="object-contain rounded-xl"/>
											</div>
											<Link href={Projects[index].link} className="relative group self-center pt-8 pb-4 w-full">
												<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-fit text-2xl self-center mt-4 px-4 py-0.5 rounded-lg bg-neutral-700 text-center text-white/50 font-semibold transition duration-300 opacity-100 group-hover:opacity-0 z-10">See more &gt;</button>
												<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-fit text-2xl self-center mt-4 px-4 py-0.5 rounded-lg bg-gradient-to-r text-center text-white/50 from-fuchsia-700 to-violet-700/20 via-violet-500/40 font-semibold transition duration-300 opacity-0 group-hover:opacity-100">See more &gt;</button>
												<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-xl  flex w-fit text-2xl self-center mt-4 px-4 py-0.5 rounded-lg bg-gradient-to-r text-center text-white/50 from-fuchsia-700 to-violet-700/20 via-violet-500/40 font-semibold opacity-0 group-hover:opacity-100 transition duration-300">See more &gt;</button>
											</Link>
										</div>
									))}
								</div>
								
								<div id="window_headbar" className="bg-gradient-to-t from-neutral-950 to-neutral-900 w-[100%] absolute flex z-50 font-normal rounded-t-xl items-center top-0 h-8 px-4">
									<div className="w-full h-full justify-between flex items-center">
										<div className="w-full py-4 text-sm flex flex-row items-center justify-start gap-4 font-semibold">
											<div className="text-white/60 hover:text-white/90 transition duration-200">File</div>
											<div className="text-white/60 hover:text-white/90 transition duration-200">Edit</div>
											<div className="text-white/60 hover:text-white/90 transition duration-200">View</div>
											<div className="text-white/60 hover:text-white/90 transition duration-200">Go</div>
											<div className="text-white/60 hover:text-white/90 transition duration-200">Help</div>
										</div>
										<div className="flex flex-row justify-center items-center w-fit gap-2">
              	      <div className="bg-yellow-500 rounded-full size-3 cursor-pointer"></div>
              	      <div className="bg-green-500 rounded-full size-3 cursor-pointer"></div>
              	      <div className="bg-red-500 rounded-full size-3 cursor-not-allowed"></div>
              	    </div>
									</div>
              	</div>

							</div>
						</motion.div>
				</section>
  );
}
