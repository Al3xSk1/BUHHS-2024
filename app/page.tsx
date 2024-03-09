import Image from "next/image";
import BUHHS from "./media/BUHHS-Logo.png";
import ScrollRevealText from './components/ScrollRevealText';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <Image src={BUHHS} alt="BUHHS Logo" width={250} height={250}/> 
      </div>
      <div>
        <h1>
          <p>Hello, this is my 2024 Boston University Hacks High School BUHHS</p>
        </h1>
      </div>
      <div>
        <p>Scroll down to reveal the text:</p>
        <ScrollRevealText />
        {"Example Text Piece 1"}
        <ScrollRevealText />
        {"Example Text Piece 1"}
        <ScrollRevealText />
        {"Example Text Piece 1"}
        <ScrollRevealText />
        {"Example Text Piece 1"}
      </div>
    </main>
  );
}

export default Home;