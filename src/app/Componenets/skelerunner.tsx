

export default function SkeleRunner() {
	return(
		<div className="overflow-hidden relative h-8 w-8 pointer-events-auto">
			<img src="/assets/skeleton.png" className=" select-none animate-jump pointer-events-none min-w-80 h-[120px] absolute top-0 left-0" style={{objectPosition: "100% 160%", objectFit: "none"}} />
		</div>	
	)
}