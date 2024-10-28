'use client'

import { twMerge } from "tailwind-merge";
import { useState, useEffect, useLayoutEffect } from "react";
import React from "react";
import {GameButton, EasyButton, MediumButton, HardButton, GoButton, AgainButton, HomeButton} from "./gameButton";
import { Silkscreen } from "next/font/google";
import { Graveyard } from "./svgAssets";
import {RandomSkeleRunner} from "./RandomSkeleRunner";


const GameHeader = Silkscreen({weight: "400", subsets: ["latin"]})

export default function Game(){
	const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

	const [score,setScore] = useState(0);
	const [lives,setLives] = useState(3);
	const [livesReset, setLivesReset] = useState(false);
	const [spawnRate, setSpawnRate] = useState(0.0);

	const [startMenu, setStartMenu] = useState(true);
	const [diffMenu, setDiffMenu] = useState(false);
	const [loreMenu, setLoreMenu] = useState(false);
	const [playMenu, setPlayMenu] = useState(false);
	const [scoreMenu, setScoreMenu] = useState(false);
	

	const [tombSpawn, setTombSpawn] = useState<boolean[]>([]);

	const playMenuRef = React.useRef<HTMLDivElement>(null);
	const gridRef = React.useRef<HTMLDivElement>(null);
	const [frameWidth, setFrameWidth] = useState(0)
	const [padding, setPadding] = useState(0)
	
	useEffect(() => {
		if (playMenu) {
			const timer = setTimeout(() => {
				const updateSizes = () => {
					if (playMenuRef.current && gridRef.current) {
						const playMenuWidth = playMenuRef.current.offsetWidth;
						const gridWidth = gridRef.current.offsetWidth;
						setFrameWidth(gridWidth / 10);
						setPadding((playMenuWidth - gridWidth) / 2);
					}
				};
				updateSizes();
			}, 0);
			return () => clearTimeout(timer);
		}
	}, [playMenu]);
	
	useEffect(() => {
		console.log('frameWidth:', frameWidth);
		console.log('padding:', padding);
	}, [frameWidth, padding]);

	useEffect(() => {
		if (playMenu && !livesReset) {
			const timer = setTimeout(() => {
				setLives(3);
				setLivesReset(true);
			}, 100);
			return () => clearTimeout(timer);
		}
	}, [playMenu, livesReset]);

	useEffect(()=> {
		setLives(3);
	}, [playMenu])
	
	useEffect(() => {
		if (playMenu) {
			const newGridItems: boolean[] = Array(50).fill(0).map(() => Math.random() <= spawnRate);
			setTombSpawn(newGridItems);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [playMenu]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const rect = e.currentTarget.getBoundingClientRect();
    setCursorX(e.clientX - rect.left);
    setCursorY(e.clientY - rect.top);
  };

	useEffect(() => {
		console.log('Lives:', lives);
	}, [lives]);

	const handleStartMenuChange = () => {
		setStartMenu(false);
		setDiffMenu(true);
		setScoreMenu(false);
		setScore(0);
		setLives(3);
		console.log('Lives after reset:', lives);
	};

	const handleEasyDiffMenuChange = () => {
		setDiffMenu(false);
		setLoreMenu(true);
		setSpawnRate(0.3);
	};

	const handleMidDiffMenuChange = () => {
		setDiffMenu(false);
		setLoreMenu(true);
		setSpawnRate(0.5);
	};

	const handleHardDiffMenuChange = () => {
		setDiffMenu(false);
		setLoreMenu(true);
		setSpawnRate(0.7);
	};

	const handleLoreMenuChange = () => {
		setLoreMenu(false);
		setPlayMenu(true);
		setScore(0);
		setLives(3);
		setLivesReset(false);
	};


	const handleScoreMenuChange = () => {
		setScoreMenu(false);
		setStartMenu(true);
		setScore(0);
		setLives(3);
	};

	useEffect(() => {
		if (lives === 0) {
			setPlayMenu(false);
			setScoreMenu(true);
		}
	}, [lives]);

	return(
		<div className="cursor-none m-1 relative flex w-full h-full group" onMouseMove={handleMouseMove}>

			<div id="Cursor"
        className="hidden z-50 pointer-events-none group-hover:flex text-2xl size-5 absolute rounded-full items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          top: `${cursorY}px`,
          left: `${cursorX}px`,
        }}
      >
				<div className="flex size-8">
					<svg viewBox="-0.5 0 25 25" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-red-600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.5001 12.5H16.5601" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.44 12.5H2.5" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22V17.06" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 7.94V3" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.26001 10.5C5.93001 8.22 7.73001 6.41999 10.01 5.75999" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.01 19.24C16.29 18.58 18.09 16.78 18.76 14.5" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.26001 14.5C5.93001 16.78 7.73001 18.58 10.01 19.24" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.01 5.75999C16.29 6.41999 18.09 8.22 18.76 10.5" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
				</div>
			</div>

			<div className={twMerge("flex flex-col mt-8 w-full h-[360px] relative", GameHeader.className)}>

				<div id="Start Menu" className={startMenu? "absolute inset-0 flex flex-col items-center justify-center w-full h-full z-20": "hidden pointer-events-none"}>
					<div className="w-full h-full relative justify-center items-center flex flex-col">
						<div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%)]">
							<img src="/assets/Start.jpg" className="object-cover brightness-50"/>
						</div>
						<div className={"text-3xl text-white/60 -translate-y-14 text-center font-semibold tracking-wide"}>Skele-Rush <br/> Heresy in the Cemetary</div>
						<button className="cursor-none translate-y-24" onClick={() => handleStartMenuChange()}>
							<GameButton />
						</button>
					</div>
				</div>


				<div id="Difficulty Menu" className={diffMenu? "absolute inset-0 flex flex-col gap-24 items-center justify-center w-full h-full z-20": "hidden pointer-events-none"}>
					<div className="w-full h-full relative justify-center items-center flex flex-col">
						<div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%)]">
							<img src="/assets/diff.jpg" className="object-cover brightness-50"/>
						</div>	
						<div className="text-white/70 text-3xl">Choose your difficulty </div>
						<div className="flex flex-row w-full justify-center gap-12 translate-y-28">
							<button className="cursor-none" onClick={() => handleEasyDiffMenuChange()}>
								<EasyButton />
							</button>
							<button className="cursor-none" onClick={() => handleMidDiffMenuChange()}>
								<MediumButton />
							</button>
							<button className="cursor-none" onClick={() => handleHardDiffMenuChange()}>
								<HardButton />
							</button>
						</div>
					</div>
				</div>


				<div id="Lore Menu" className={loreMenu? "absolute inset-0 flex flex-col items-center justify-between w-full h-full z-20 px-8 py-4": "hidden pointer-events-none"}>
					<div className="flex flex-row w-full justify-center text-white text-sm text-justify leading-6">
						During the developement of this project, this deranged developer was constantly getting angry and &apos;accidentall&apos; cursed way too many profanities at way too many people&apos;s ancestors. They didn&apos;t seem to like it very much as they decided to wake from their slumber to teach him a lesson. Help Zyad get away with his bad habits of cursing randomly and casting spells with zero consciousness by not letting the skullys get out of the cemetary from the main gate. Zyad is a bit weak physically so he won&apos;t be able to handle more than two enraged skeletons.
					</div>
					<button className="flex w-full py-10 px-6 items-center justify-center cursor-none" onClick={() => handleLoreMenuChange()}>
						<GoButton />
					</button>
				</div>


				<div id="Play Menu" ref={playMenuRef} className={playMenu? "absolute inset-0 flex flex-col items-center justify-center overflow-x-clip w-full h-full z-20": "hidden pointer-events-none"}>
					<div className="flex relative w-full h-full justify-center">
						<div className="absolute flex top-0 left-1/2 -translate-x-1/2 flex-row gap-8 text-white pointer-events-none">
							<div className="">Score: {score}</div>
							<div className="">Lives	: {lives}</div>
						</div>
						<div className="grid pt-10 grid-cols-10 grid-rows-5 gap-6" ref={gridRef}>
							{Array(50).fill(0).map((_, index) => (
      				 <div key={index} className={tombSpawn[index]? "": "pointer-events-none opacity-0"} >  {/** OnClick toke to test dynamic values */}
									<div className="size-8 relative">
									{tombSpawn[index] && (
										<RandomSkeleRunner
											translateXValue={(frameWidth + 3) * (10-(index % 10)) - 6 + padding}
											onSkeleOutOfBounds={() => setLives(Math.max(0, lives-1))}
											onSkeleClick={() => setScore(score + 1)}
											gameStarted={playMenu}
										/>
      						)}
									<Graveyard />
									</div>
								</div>
      				))}
						</div>
					</div>
				</div>


				<div id="Score Menu" className={scoreMenu? "absolute inset-0  flex flex-col items-center gap-4 justify-center overflow-hidden h-full z-20": "hidden pointer-events-none"}>
					<div className="relative w-full h-full">
						<div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%)]">
							<img src="/assets/GameOver.jpg" className="object-cover brightness-50"/>
						</div>
					<div className="text-red-500 text-5xl text-center mt-4 w-full capitalize font-bold">Game Over</div>
					<p className="text-white text-2xl mx-auto self-center text-center">The dev is in for a bad time...</p>
					<div className="items-center w-full flex justify-center flex-col pt-32">
						<p className="text-2xl text-white">score : {score}</p>
						<div className="flex items-center pt-8 justify-center gap-8">
							<div onClick={() => handleStartMenuChange()}>
								<AgainButton />
							</div>
							<div onClick={() => handleScoreMenuChange()}>
								<HomeButton />
							</div>
						</div>
					</div>
					</div>
				</div>

			</div>
		</div>
	)
}