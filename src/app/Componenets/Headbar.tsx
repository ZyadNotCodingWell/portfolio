'use client';

import { useState, useEffect } from "react";

export default function HeadBar(){
	const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true 
  }));
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString('en-US', {
		weekday: 'short',
		day: '2-digit',
		month: 'long'
	}));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true 
      }));
      setCurrentDate(new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'long'
      }));
    }, 1000); 
    return () => clearInterval(timer); 
  }, []);
	return(
		<div className="hidden lg:block absolute top-0 w-full cursor-default">
			<div className="w-full h-8 flex text-xs items-center text-white/50 font-extrabold bg-neutral-900/90 rounded-b-lg px-[10%] py-2.5 justify-between">
				<div className="w-full justify-center flex text-white/30 flex-row gap-6 text-lg">
					<div className="hover:text-white/50 transition duration-300">{currentDate}</div>
					<div className="hover:text-white/50 transition duration-300">{currentTime}</div>
				</div>
			</div>
		</div>
	)
}