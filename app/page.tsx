import Image from "next/image";
import BUHHS from "./media/BUHHS-Logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <Image src={BUHHS} alt="BUHHS Logo" width={250} height={250}/> 
      </div>
      <div>
          <p>Hello, this is my 2024 Boston University Hacks High School BUHHS</p>
          <p>Although my project never took shape, I learned a lot</p>
          <Link href="https://docs.google.com/presentation/d/1gRlfg3NKdU-yEpPsW4Q9uptvnmRofSgg1nCaMepCCtw/edit#slide=id.p">Presentation Link</Link>
      </div>
    </main>
  );
}
