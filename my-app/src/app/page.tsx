import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Filmes from "./Pages/Filmes";
import Series from "./Pages/Series";
import Sobre from "./Pages/Sobre";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Bem-vindo ao Uniflix</h1>
          <p className="text-lg mb-4">
            A melhor plataforma de streaming do mundo.
          </p>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
            Comece sua avaliação gratuita de 30 dias
          </button>
        </div>
      </div>
      <Filmes></Filmes>
      <Sobre></Sobre>
      <Series></Series>
      <Footer></Footer>
    </main>
  );
}
