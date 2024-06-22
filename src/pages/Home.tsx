import { FunctionComponent } from "react";
import Leaderboard from "./Leaderboard";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import Social from "./Social";
import About from "./About";
import "../global.css";

const Home: FunctionComponent = () => {
  return (
    <div className="w-100% h-100vh bg-no-repeat bg-scroll bg-left-top bg-contain bg-custom-bg text-white font-freckle-face">
      <div className="stars"></div>
      <div className="flex flex-col md:flex-row justify-evenly items-center p-6 bg-opacity-50">
        <div className="text-21xl ml-10 flex flex-col w-[600px]">
          <div className="flex">
            <div className="flex">
              <div className="flex p-6">
                <div className="w-auto">
                  <img
                    className="w-[175px] h-[174px] object-cover pl-10"
                    alt=""
                    src="/main-logo.png"
                  />
                </div>
                <div className="w-auto mt-2 flex items-start  py-0 px-[68px] box-border text-center">
                <span
               className="text-31xl"
              >
                Olympic on BASE
              </span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex space-x-14 text-3xl ml-[100px] mt-[20px]">
          <div className="cursor-pointer border-transparent border-b-2 hover:border-white">
            HOME
          </div>
          <div className="cursor-pointer border-transparent border-b-2 hover:border-white">
            ABOUT
          </div>
          <div className="cursor-pointer border-transparent border-b-2 hover:border-white">
            LEADERBOARD
          </div>
          <div className="cursor-pointer border-transparent border-b-2 hover:border-white">
            TOKENOMICS
          </div>
          <div className="cursor-pointer border-transparent border-b-2 hover:border-white">
            ROADMAP
          </div>
        </nav> 
      </div>
      <div>
        <div className="flex ">
        <img
              className="w-[445px] h-[614px] object-cover"
              alt=""
              src="/brett-salute.gif"
            />
          
        {/* Team BNB Column */}
        
        
      </div>

        
        

      <div className="flex flex-col mt-20 space-y-20">
        <div className="marquee-container bg-blue-900 text-white">
          <div className="marquee font-extrabold"> $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC   $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC  $OLYMPIC </div>
        </div>
        <div className="flex justify-center">
          <About />
        </div>
        <div className="flex justify-center">
          <Leaderboard />
          
        </div>
        <div className="flex justify-center">
          <Tokenomics />
        </div>
        <div className="flex justify-center">
          <Roadmap />
        </div>
        <div className="wave-container">
          <div className="wave"></div>
        </div>
        <div>
          <Social />
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default Home;
