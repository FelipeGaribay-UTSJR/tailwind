import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-red-500 to-black min-h-screen flex flex-col justify-center items-center text-white">
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-end">
        <div className="mr-4">
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/about">Acerca de</Link>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">¡Bienvenido a mi página!</h1>
      <p className="text-lg text-center">¡Hola! Soy Felipe, estudiante de TI03SM-22. Bienvenido a mi página personal.</p>
    </div>
  );
};

export default Home;
