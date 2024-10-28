"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SkeleRunner from "./skelerunner";

interface RandomSkeleRunnerProps {
  translateXValue: number;
	onSkeleOutOfBounds: () => void; 
	onSkeleClick: () => void; 
  gameStarted: boolean;
}

export const RandomSkeleRunner: React.FC<RandomSkeleRunnerProps> = ({ translateXValue, onSkeleOutOfBounds, onSkeleClick, gameStarted}) => {
  const [showSkele, setShowSkele] = useState(false);
  const [randomValue, setRandomValue] = useState(Math.random());
  const [spawnRate, setSpawnRate] = useState(0.05);
  
  useEffect(() => {
    if (!gameStarted) {
      setShowSkele(false);
    }
  }, [gameStarted]);
  useEffect(() => {
    setSpawnRate(0.05); // Reset spawnRate to its initial value
  }, [gameStarted]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomValue(Math.random());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [gameStarted]);

  useEffect(() => {
    if (randomValue < spawnRate && gameStarted) {
      console.log('Skeleton should spawn!');
      setShowSkele(true);
    }
  }, [randomValue, gameStarted, spawnRate]);

	useEffect(() => {
	  const intervalId = setInterval(() => {
	    setSpawnRate((prevSpawnRate) => Math.min(0.3, prevSpawnRate + 0.02));
	  }, 20000); // update spawn rate every 20 seconds

	  return () => clearInterval(intervalId);

	}, [gameStarted]);

	const handleClick = () => {
    setShowSkele(false);
  };

  return (
    <motion.div
      className="w-fit flex absolute inset-0 z-20"
      initial={{ translateX: 0 }}
      animate={showSkele ? { translateX: translateXValue } : { translateX: 0 }}
      transition={showSkele ? { duration: translateXValue*3/70, ease: "linear" }: {duration: 0}}
			onClick={() => {onSkeleClick(); handleClick()}}
			onAnimationComplete={() => {
				if(showSkele){
					onSkeleOutOfBounds();
          setShowSkele(false);
				}
			}}
    >
      {showSkele && <SkeleRunner />}
    </motion.div>
  );
};