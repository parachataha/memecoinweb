import { FunctionComponent } from "react";

const Tokenomics: FunctionComponent = () => {
  return (
    <div className="w-full h-full overflow-y-auto relative overflow-hidden  text-white font-freckle-face">
      <div className="text-21xl [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mb-10 text-center ">
        TOKENOMICS
      </div>
      <div className="flex flex-col text-20xl [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)] pl-10">
        <div className="flex flex-row justify-center">
          <div>
            <div className="text-center">
              
              <div className="bg-white text-blue-700 text-6xl font-bold  mt-2 px-4 py-2 rounded">
                Token Supply: 20,240,000,000 Tokens
              </div>
            </div>

            <div className="w-[700px] mt-1000">
              <p className="text-6xl">
                In our Tokenomics, 50% of tokens are allocated for liquidity to
                ensure a stable trading environment, while 25% support
                development and marketing to fuel our meme-tastic journey. The
                remaining 25% is reserved for community rewards and incentives,
                ensuring that those who contribute to the hype and hold their
                tokens get their share of the glory!
              </p>
            </div>
          </div>
           <div className="">
            <img
              className="w-[550px] h-[350px] object-contain  p-10 align-top"
              alt=""
              src="/pie-chart.png"
            />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
