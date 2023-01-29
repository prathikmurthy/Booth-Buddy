import Head from "next/head";
import Image from "next/image";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <>
      <div className="text-white text-center flex w-full flex-col mt-44">
        <h1 className="text-5xl font-extrabold text-slate-200">
          Hi, Blake!
        </h1>
        <h2 className="py-3 text-2xl font-bold antialiased text-[#9C9C9C]">Welcome to Your Rooms</h2>
      </div>
    </>
  );
}
