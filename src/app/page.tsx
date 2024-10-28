"use client"
import Image from "next/image";
import { Inconsolata, Quicksand  } from "next/font/google";
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const montserrat = Quicksand({subsets: ["latin"], weight: ["400", "700"]})

export default function Home() {
  const text = "Hi, my name is Zyad Cherkaoui, I am a front-end developer, and a data-science student in Paris. ";
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
              C:&gt; {text.slice(0, currentIndex)}
            </div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 13.7, ease: "linear", duration: 0}} className="flex flex-row w-fit relative">
              <p>C:&gt; </p>
              <motion.div className="absolute right-0 top-0 w-0.5 h-5 bg-green-600" initial={{opacity: 0}} animate={{
              opacity: [1,0,1]}} transition={{duration: 1.4, ease: "backInOut", repeat: Infinity}}></motion.div>
            </motion.div>

          </div>
  );
}
