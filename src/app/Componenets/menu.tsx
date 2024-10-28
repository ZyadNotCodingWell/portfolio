import Link from "next/link"
import { Folder, GameIcon, Home } from "./svgAssets"


export default function Menu() {
	return(
		<div className="flex absolute bottom-2 left-1/2 lg:bg-zinc-900/70 text-green-600/70 lg:text-white/50 -translate-x-1/2 items-center px-8 w-fit justify-center gap-6 lg:rounded-2xl py-1.5 text-sm lg:text-xl mx-auto">
		<Link href="/">
			<div className="size-10 group">
				<div className="group-hover:-translate-y-6 opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:text-white/80 items-center justify-between transition duration-500" >
					<Home/>
					<p className="hidden group-hover:flex text-center text-xs transition duration-200">  Cmd</p>
				</div>
			</div> 
		</Link>
		<Link href="Projects">
			<div className="size-10 group">
				<div className="group-hover:-translate-y-6 opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:text-white/80 items-center justify-between transition duration-500" >
					<Folder/>
					<p className="hidden group-hover:flex text-center text-xs transition duration-200">Projects</p>
				</div>
			</div>  
		</Link>
		<Link href="Game">
			<div className="size-10 group">
				<div className="group-hover:-translate-y-6 opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:text-white/80 items-center justify-between transition duration-500" >
					<GameIcon />
					<p className="hidden group-hover:flex text-center text-xs transition duration-200">Game?</p>
				</div>
			</div>  
		</Link>
		<Link href="#"> 
			<div className="font-semibold group transition duration-150 cursor-pointer w-full">
				<p className="group-hover:-translate-y-6 group-hover:scale-125 group-hover:text-white/80 transition duration-500">About me</p>
			</div>  
		</Link>
		<Link href="#">
			<div className="font-semibold group transition duration-150 cursor-pointer w-full">
				<p className="group-hover:-translate-y-6 group-hover:scale-125 group-hover:text-white/80 transition duration-500">Contact me</p>
			</div>  
		</Link>
	</div>
	)
}