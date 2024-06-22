import { FunctionComponent } from "react";
const About: FunctionComponent = () => {
  return (
    <div>
      <div className="flex ">
        <div>
        <img
              className="w-[500px] h-[500px] object-cover"
              alt="Ponkie logo"
              src="/ponkie-showing.png"
            />

        </div>
        
        <div className="flex flex-col ml-2 align-center">
     
      
     <div className="flex font-bold text-31xl " >
       About
     </div>
     <div className="lg:w-[1400px] text-6xl mt-2">
       Welcome to the ultimate showdown in the world of meme coins—where humor
       meets the blockchain, and digital athletes flex their market caps!
       Assemble your popcorn and prepare for the MemeCoin Mania Olympics 2024!
       Here, top meme coin characters from various blockchains—including Team
       ETH, Team SOL, Team BASE, and Team BNB—compete in a spectacular display
       of agility, strategy, and sheer meme magic. Keep your eyes on the prize;
       the blockchain with the most market cap at the end of the year will
       clinch the coveted title. We measure all the metrics that matter in the
       meme coin universe to see which team vaults to victory. So, buckle up
       for a rollercoaster ride of digital drama and Olympic-sized laughs—it's
       going to be a block-busting blast! Who will take the crown? Stay tuned,
       place your bets, and may the richest blockchain win!
     </div>
        </div>

    </div>
    
    </div>
    
  );
};

export default About;
