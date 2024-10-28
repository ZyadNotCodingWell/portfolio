"use client"
import Image from "next/image";
import { Inconsolata, Quicksand  } from "next/font/google";
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Game from "../Componenets/game";

const montserrat = Quicksand({subsets: ["latin"], weight: ["400", "700"]})

export default function Home() {
  const text = "Launching game... ";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
    }, 130);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
          <div className={twMerge(`flex w-fit text-green-600 flex-col font-semibold my-6 mx-4`,montserrat.className)}>
            <div className="relative mt-8 flex w-fit max-w-8xl">
              C:&gt; Hi, my name is Zyad Cherkaoui, I am a front-end developer, and a data-science student in Paris. 
            </div>
            <div className="flex flex-row w-fit relative">
              <p>C:&gt; {text.slice(0,currentIndex)}</p>
              <motion.div className="absolute right-0 top-0 w-0.5 h-5 bg-green-600" initial={{opacity: 0}} animate={{
              opacity: [1,0,1]}} transition={{duration: 1.4, ease: "backInOut", repeat: Infinity}}></motion.div>
            </div>
            <motion.div className="lg:hidden flex flex-row w-fit relative" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0, delay: 3.6}}>
              <p>This experience is strongly recommended on laptop, have a cute video of <Link href="https://www.youtube.com/watch?v=kxokyX5Qjtk" className="font-extrabold underline hover:text-green-500">cats</Link> instead :D</p>
            </motion.div>
						<motion.div className="hidden relative lg:flex mt-4 translate-x-96 translate-y-24 w-full h-fit border pt-4 border-white/30 rounded-xl bg-zinc-950/95"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0, delay: 3}}>
							<div className="bg-gradient-to-t from-neutral-950 to-neutral-900 w-full absolute flex z-50 font-normal rounded-t-xl items-center top-0 h-8 px-4">
								<div className="w-full h-full justify-between flex items-center">
                	<p className="text-white/60">Skele-Rush : Heresy in the Cemetary</p>
									<div className="flex flex-row justify-center items-center w-fit gap-2">
                    <div className="bg-yellow-500 rounded-full size-3 cursor-pointer"></div>
                    <div className="bg-green-500 rounded-full size-3 cursor-pointer"></div>
                    <div className="bg-red-500 rounded-full size-3 cursor-not-allowed"></div>
                  </div>
								</div>
              </div>
							<div className="w-full h-full flex">
								<Game />
							</div>
						</motion.div>
          </div>
  );
}
