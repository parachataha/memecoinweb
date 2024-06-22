import { FunctionComponent } from "react";

const Roadmap: FunctionComponent = () => {
  return (
    <div className="w-full h-full overflow-y-auto relative overflow-hidden  text-white font-freckle-face">
      

      <div className="text-21xl text-snow-100 text-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] lg:mt-2">
        RoadMap
      </div>
      <div className="flex flex-col justify-center mt-32 space-y-8 space-x-8 lg:space-y-0 lg:space-x-8">
        <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.6)] rounded-31xl bg-gray-300 w-[238px] lg:w-[300px] h-auto p-4 sm:ml-6">
          <h2 className="text-11xl mb-2">Q1 2024: Launch and Team Formation</h2>
          <ul className="text-xl">
            <li className="mb-2">
              Official launch of the meme coin and unveiling of the
              Olympic-themed project.
            </li>
            <li className="mb-2">
              Formation of teams: Team ETH, Team SOL, Team BASE, and Team BNB.
            </li>
            <li>Release initial character designs and backstory.</li>
          </ul>
        </div>
        <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.6)] rounded-31xl bg-gray-300 w-[238px] lg:w-[300px] h-auto p-4">
          <h2 className="text-11xl mb-2">
            Q2 2024: Community Engagement and Partnerships
          </h2>
          <ul className="text-xl">
            <li className="mb-2">
              Launch community contests and interactive events to boost
              engagement.
            </li>
            <li className="mb-2">
              Form partnerships with popular platforms and influencers in the
              crypto space.
            </li>
            <li>Start of preliminary rounds and challenges among teams.</li>
          </ul>
        </div>
        <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.6)] rounded-31xl bg-gray-300 w-[238px] lg:w-[300px] h-auto p-4">
          <h2 className="text-11xl mb-2">
            Q3 2024: MemeCoin Olympics Main Events
          </h2>
          <ul className="text-xl">
            <li className="mb-2">
              Begin main competition events, streamed live with real-time
              community interaction.
            </li>
            <li className="mb-2">
              Implement voting mechanisms for the community to influence event
              outcomes.
            </li>
            <li>Track team performances and update leaderboards weekly.</li>
          </ul>
        </div>
        <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.6)] rounded-31xl bg-gray-300 w-[238px] lg:w-[300px] h-auto p-4">
          <h2 className="text-11xl mb-2">
            Q4 2025: Grand Finale and Token Rewards
          </h2>
          <ul className="text-xl">
            <li className="mb-2">
              Host the grand finale event with massive community participation.
            </li>
            <li className="mb-2">
              Declare the winning blockchain based on the highest market cap
              increase.
            </li>
            <li>
              Distribute rewards and special edition tokens to participants and
              top holders.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
