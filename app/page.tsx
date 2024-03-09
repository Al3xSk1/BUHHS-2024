import dynamic from 'next/dynamic';
import Image from "next/image";
import BUHHS from "./media/BUHHS-Logo.png";

const ChangeText = dynamic(() => import("./components/change-text"), { ssr: false });

const HomePage: React.FC = () => {
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
        <p>Begin</p>
        <ChangeText />
        <p>Example Text Piece 1</p>
        <ChangeText />
        <p>Example Text Piece 2</p>
        <ChangeText />
        <p>Example Text Piece 3</p>
        <ChangeText />
        <p>Example Text Piece 4</p>
        <ChangeText />
        <p>Example Text Piece 5</p>
        <ChangeText />
        <p>Example Text Piece 6</p>
        <ChangeText />
        <p>Example Text Piece 7</p>
        <ChangeText />
        <p>Example Text Piece 8</p>
        <ChangeText />
        <p>End</p>
      </div>
    </main>
  );
}
export default HomePage;