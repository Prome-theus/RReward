import React from "react";
import cardList from "./data";

export default function review() {
  return (
    <div>
        <title>My Review</title>

      <p className="text-center font-bold text-6xl py-10 text-amber-600 font-mono">My Reviews</p>

      <main className="container mx-auto py-10 px-8 ">
        <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-col-1">
          
          {cardList.map((card , n) => (
            <div key={n} className="shadow-lg rounded-lg">
            
                <img className="rounded-t-lg" src={card.img} alt=""/>
                <div className="p-5">
                <h3 className="text-3xl font-bold text-amber-600 mb-3">{card.title}</h3>
                <p className="text-lg font-normal text-stone-950 ">{card.text}</p>
                </div>                
            </div>
          ))}
        
        </div>
      </main>
    </div>
  );
}

