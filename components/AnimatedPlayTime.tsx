import { motion } from "framer-motion";
import svgPaths from "../imports/svg-a2xr4yb13j";
import vinylSvgPaths from "../imports/svg-4pv89it83o";

function Dog() {
  return (
    <div
      className="absolute h-[366.616px] w-[144.393px] z-10"
      data-name="dog"
      style={{ top: '0px', left: '50%', transform: 'translateX(-50%)' }}
    >
      <div className="relative h-full w-full">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 -5 149 377"
        >
          <style>{`
            .tail-wag {
              animation: tailWag 0.8s infinite alternate ease-in-out;
              transform-origin: 75px 85px;
            }

            @keyframes tailWag {
              0% { transform: rotate(-15deg); }
              100% { transform: rotate(15deg); }
            }
          `}</style>
          
          <g id="dog">
            <g id="dog body">
              {/* Tail shape with CSS animation */}
              <path
                d={svgPaths.p2fd97f80}
                id="tail"
                className="tail-wag"
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeWidth="3.84"
              />

              <path
                d={svgPaths.p2d763f00}
                id="left paw"
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeWidth="3.84"
              />
              <path
                d={svgPaths.p2e160600}
                id="right paw"
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeWidth="3.84"
              />
            </g>
            <g id="dog head">
              <path
                d={svgPaths.p2f707300}
                fill="var(--fill-0, black)"
                id="nose"
              />
              <g id="eyes">
                <circle
                  cx="58.9952"
                  cy="199.192"
                  fill="var(--fill-0, black)"
                  id="left eye"
                  r="5.76"
                />
                <circle
                  cx="92.5952"
                  cy="197.272"
                  fill="var(--fill-0, black)"
                  id="right eye"
                  r="5.76"
                />
              </g>
              {/* Animated mouth with panting motion */}
              <motion.path
                d="M71.9552 232.792H84.4352"
                id="mouth"
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeWidth="3.84"
                animate={{
                  d: [
                    "M71.9552 232.792H84.4352",
                    "M71.9552 232.792Q78.1952 237.792 84.4352 232.792",
                    "M71.9552 232.792H84.4352",
                  ],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <path
                d={svgPaths.p25625680}
                id="right ear"
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeWidth="3.84"
              />
              <path
                d={svgPaths.p2647b180}
                id="left ear"
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeWidth="3.84"
              />
              <g id="beard">
                <path
                  d={svgPaths.p15a157a0}
                  id="Vector 3"
                  stroke="var(--stroke-0, black)"
                  strokeLinecap="round"
                  strokeWidth="3.84"
                />
                <path
                  d={svgPaths.p14919c00}
                  id="Vector 4"
                  stroke="var(--stroke-0, black)"
                  strokeLinecap="round"
                  strokeWidth="3.84"
                />
                <path
                  d={svgPaths.p53c5f00}
                  id="Vector 9"
                  stroke="var(--stroke-0, black)"
                  strokeLinecap="round"
                  strokeWidth="3.84"
                />
              </g>
              <g id="bangs">
                <path
                  d={svgPaths.p38de93c0}
                  id="top"
                  stroke="var(--stroke-0, black)"
                  strokeLinecap="round"
                  strokeWidth="3.84"
                />
                <path
                  d={svgPaths.p34511f00}
                  id="bottom"
                  stroke="var(--stroke-0, black)"
                  strokeLinecap="round"
                  strokeWidth="3.84"
                />
              </g>
            </g>
            <path
              d={svgPaths.p1067c280}
              id="left paw_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="4.8"
            />
            <path
              d={svgPaths.p132aca80}
              id="right paw_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="4.8"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Vinyl() {
  return (
    <div className="relative size-full" data-name="vinyl">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 129 129"
      >
        <g clipPath="url(#clip0_28_52)" id="vinyl">
          <circle
            cx="64.5"
            cy="64.5"
            fill="var(--fill-0, #1915F6)"
            id="Ellipse 34"
            r="64.5"
          />
          <circle
            cx="64.5"
            cy="64.5"
            fill="var(--fill-0, #F5F5F5)"
            id="Ellipse 38"
            r="32.5"
          />
          <path
            d={vinylSvgPaths.p163bdc00}
            fill="var(--fill-0, #C4F38E)"
            id="sticker"
          />
          <circle
            cx="64.5"
            cy="64.5"
            fill="var(--fill-0, #1915F6)"
            id="Ellipse 36"
            r="13.5"
          />
          <circle
            cx="64.5"
            cy="64.5"
            fill="var(--fill-0, #F5F5F5)"
            id="Ellipse 35"
            r="10.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_28_52">
            <rect fill="white" height="129" width="129" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function AnimatedPlayTime() {
  return (
    <div className="relative w-[400px] h-[500px]">
      {/* Animated vinyl record positioned behind the dog */}
      <motion.div
        className="absolute flex h-[280.714px] items-center justify-center w-[22.717px] z-0"
        style={{ 
          top: '280px', 
          left: '50%', 
          transform: 'translateX(-50%)'
        }}
        initial={{ rotate: 0, scale: 0.8, y: 0 }}
        animate={{ 
          rotate: 360, 
          scale: 1,
          y: [-3, 3, -3]
        }}
        transition={{
          rotate: {
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          },
          scale: {
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
          y: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }
        }}
      >
        <div className="flex-none">
          <div
            className="h-[129px] relative w-[129px]"
            data-name="vinyl"
          >
            <Vinyl />
          </div>
        </div>
      </motion.div>

      {/* Dog positioned in front of the vinyl */}
      <Dog />
    </div>
  );
}