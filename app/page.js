import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <main className={`${poppins.className} min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center px-4`}>
      <Image
        src="/Logos/Logo Ver 2 (Transparent).png"
        alt="Orbit Booth Logo"
        width={300}
        height={300}
      />
      <h1 className="text-5xl font-bold text-center text-gray-900 mt-6">
        Welcome to Orbit Booth
      </h1>
      <p className="text-lg text-gray-500 mt-2 text-center">
        Coming Soon
      </p>
    </main>
  );
}
