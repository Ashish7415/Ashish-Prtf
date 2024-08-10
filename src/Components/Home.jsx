import React from "react";

import pic from "../../public/photo.avif";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";






function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
               <ReactTyped
                className="text-red-700 font-bold"
                strings={[" Developer", "Programmer", "Coder" ,"Front-End"]}
                typeSpeed={30}
                backSpeed={40}
                loop={true}
              /> 
              
            </div>
            <br />
            <p className="text-2xl md:text-md text-justify text-clip ">
              I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center  text-xl">Available on</h1>
                <ul className="flex space-x-5 text-xl">
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer " />
                    </a>
                  </li>
                  <li>
                    
                    <a href="https://www.instagram.com//" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                     </li>
                  <li>
                    <a href="https://www.youtube.com/@mediumTechTutorials" target="_blank">
                      <FaXTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer " />
                    </a>
                  </li>
                  
                </ul>
              </div>
              <div className=" space-y-2">
                  {/* resume parts*/}
                <div>
                <a href="" className=' bg-blue-600 px-20 py-3 rounded-md text-xl' download>
                    resume
                </a>
            </div>                       
                    

                  
                 
                 
                <Link/>
                
                 
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 ">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]    border-2   shadow-lg shadow-cyan-500 hover:scale-75 hover:bg-slate-300 bg-gray-700 "
              alt=""
            />
          </div>
               
        </div>
      </div>

    
      
    </>
  );
}

export default Home;