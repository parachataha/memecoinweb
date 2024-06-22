import React, { FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import "../global.css"; 

const zoomVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const headMovementVariants: Variants = {
  left: { rotate: -5 },
  right: { rotate: 5 },
};

const Leaderboard: FunctionComponent = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="w-full h-full overflow-y-auto relative overflow-hidden text-white font-freckle-face ">
      <div className="z-10 flex flex-row justify-center text-center ">
        <h1 className="text-31xl pr-20 text-shadow-lg">HOW TO BUY</h1>
      </div>
      <div  className="flex ">
        <div>
          <motion.img
            src="/brett-sitting.png"
            alt="Blue Pepe"
            initial="left"
            animate="right"
            variants={headMovementVariants}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="mr-10 w-[600px] h-[600px] "
          />
        </div>
        <div>
          <div className="flex flex-col items-center ">
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={zoomVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-blue-700 rounded-2xl w-[70%] max-w-[600px] pl-6 pr-6 mb-6 text-shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2">Make Wallet</h2>
              <p>
                Download MetaMask or your wallet of choice from the app store
                or Google Play Store for free. Desktop users can download the
                Google Chrome extension by going to metamask.io.
              </p>
            </motion.div>

            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={zoomVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-blue-700 rounded-2xl w-[70%] max-w-[600px] pl-6 pr-6 mb-6 text-shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2">Get Some ETH</h2>
              <p>
                Have ETH in your wallet to switch to $OLYMPIC. If you don't
                have any ETH, you can buy directly on MetaMask, transfer from
                another wallet, or buy on another exchange and send it to your
                wallet.
              </p>
            </motion.div>

            <motion.div
              ref={ref3}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={zoomVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-blue-700 rounded-2xl w-[70%] max-w-[600px] pl-6 pr-6 mb-6 text-shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2">Go To Uniswap</h2>
              <p>
                Connect to Uniswap. Go to app.uniswap.org in Google Chrome or
                on the browser inside your MetaMask app. Connect your wallet.
                Paste the $OLYMPIC token address into Uniswap, select $OLYMPIC
                COIN, and confirm. When MetaMask prompts you for a wallet
                signature, sign.
              </p>
            </motion.div>

            <motion.div
              ref={ref4}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={zoomVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-blue-700 rounded-2xl w-[70%] max-w-[600px] pl-6 pr-6 mb-6 text-shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-2">Switch ETH for $OLYMPIC</h2>
              <p>
                Transitioning from ETH to $OLYMPIC in our Olympics-themed event
                comes with the benefit of zero taxes, meaning you won't need to
                be concerned about purchasing with a fixed slippage rate.
                However, it's advisable to consider using slippage during
                moments of market turbulence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
