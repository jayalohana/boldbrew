import React from "react";
import Navbar from "@/components/pages/Navbar";
import HomePage from "@/components/pages/HomePage";
import Card from "@/components/pages/card";
import cardData from "@/components/pages/cardData";
import Footer from "@/components/pages/footer";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <div className="m-2 flex flex-col text-center gap-y-8 flex-1 pb-10">
        <HomePage />
        <div className="border-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mr-20 ml-20">
          {cardData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
