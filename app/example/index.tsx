import Image from "next/image";
import BUHHS from "./media/BUHHS-Logo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image src={BUHHS} alt="BUHHS Logo" width={250} height={250}/> 
      </div>
    </main>
  );
}