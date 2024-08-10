import React from "react";
import html from "../../public/html.png";
import javascript from "../../public/javascript.png";
import Tailwind from "../../public/Tailwind CSS.png";
import reactjs from "../../public/reactjs.png";
import github from "../../public/git.png"
import vscode from "../../public/vscode.png"
import css from "../../public/css.png"




function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "html",
    },
    {
      id: 2,
      logo: css,
      name: "css",
    },
    
    {
      id: 3,
      logo: Tailwind,
      name:"Tailwindcss",
      
    },
    
    
    
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: reactjs,
      name: "reactjs",
    },
    
    {
      id: 6,
      logo: github,
      name: "github",
    },
    {
      id: 7,
      logo: vscode,
      name: "vscode",
    },
    
    
    
    
  ];
  return (


              
        <div
                    
    
      name="Experiance"
      className=" container mx-auto px-4 md:px-20 my-16 "
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 underline">Skills:</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300  hover:bg-gray-600"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
            
    </div>
        
                    
  );
}

export default Experiance;