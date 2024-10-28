
import type { Metadata } from "next";
import "./globals.css";
import FullScreenTip from "./Componenets/fullFcreenTip";
import Menu from "./Componenets/menu";
import HeadBar from "./Componenets/Headbar";
import { Quicksand } from "next/font/google";


const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Front-end Developer Portfolio",
  description: "Zyad Cherkaoui's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="overflow-clip">
      <body>
        <div className={quicksand.className}> 
          <main className="flex relative min-h-screen flex-col items-center justify-center" style={{backgroundImage: `url('/assets/sunset.jpg')`, backgroundSize: "cover"}}>
            <HeadBar />
            <div className="lg:container relative flex justify-center items-center w-full h-full flex-none">
              <div className="lg:border border-white/30 relative bg-zinc-950/75 backdrop-blur-md lg:rounded-xl w-full lg:w-8/12 h-screen lg:h-[460px] flex flex-col ">
                <div className="bg-gradient-to-t from-neutral-950 to-neutral-900 w-full absolute flex justify-between z-50 lg:rounded-t-xl items-center top-0 h-8 px-4">
                  <p className="text-white/60 text-sm md:text-base">command prompt - Welcome to my portfolio.</p>
                <div className="flex flex-row justify-center items-center w-fit gap-2">
                  <div className="bg-yellow-500 rounded-full size-3 cursor-pointer"></div>
                  <div className="bg-green-500 rounded-full size-3 cursor-pointer"></div>
                  <div className="bg-red-500 rounded-full size-3 cursor-not-allowed"></div>
                </div>
                </div>
                <div className={quicksand.className}> 
                  {children}
                </div>
              </div>
            </div>
            <Menu />
          </main>
        </div> {/* Close the div wrapper */}
      </body>
    </html>
  );
}
