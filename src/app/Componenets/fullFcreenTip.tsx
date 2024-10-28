"use client"
import { useState } from "react";

export default function FullScreenTip(){
	const [infoOpacity, setInfoOpacity] = useState(true);
	return (
	<div className={infoOpacity? "absolute w-fit gap-12 h-16 flex bg-zinc-950/90 rounded-2xl px-4 items-center border justify-between border-white/35 top-12 left-1/2 -translate-x-2/4" : "hidden"}>
		<p className="font-semibold text-white/60 text-xl">Heyy, I&apos;ve been told this experience in more enjoyable on full screen.</p>
		<button onClick={() => setInfoOpacity(false)} className="items-center flex">
			<p className="font-black text-3xl text-white/40 hover:text-white/70 hover:scale-105 mr-2 transition duration-300">X</p>
		</button>
	</div>
	)
}


