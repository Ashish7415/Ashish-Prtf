import React from "react";

import shopping from "../../public/pjck.png";
import Amazon  from "../../public/Amazon.png";
import RecipeApp from "../../public/Recipe App.png";




function PortFolio() {
  const cardItem = [
    
    {
      id: 1,
      logo: shopping,
      name: "Shopping Website",
    },
    {
      id: 2,
      logo: Amazon,
      name: "Amazon clone",
    },
    {
      id: 3,
      logo: RecipeApp,
      name: "Rexipe App",
    },
    
    
  ];
  return (
    <>
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5  underline">PortFolio:</h1>
        <span className=" underline font-semibold text-2xl">My Projects:</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="  rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 hover:bg-gray-600 "
              key={id}
            >
              <img
                src={logo}
                className="w-[400px] h-[200px]  "
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
              
                  
                
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </>
  );
}

export default PortFolio;