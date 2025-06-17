import svgPaths from "./svg-a2xr4yb13j";

function Dog() {
  return (
    <div
      className="absolute h-[366.616px] left-[107.165px] top-[51.449px] w-[144.393px]"
      data-name="dog"
    >
      <div className="absolute bottom-[-0.655%] left-[-1.33%] right-[-1.33%] top-[-0.523%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 149 372"
        >
          <g id="dog">
            <g id="dog body">
              <path
                d={svgPaths.p2fd97f80}
                id="tail"
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
              <path
                d="M71.9552 232.792H84.4352"
                id="mouth"
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeWidth="3.84"
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

export default function PlayTime() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="play time">
      <div className="absolute flex h-[160.714px] items-center justify-center left-[106.56px] top-[391.68px] w-[160.717px]">
        <div className="flex-none rotate-[321.789deg]">
          <div
            className="h-[114.451px] relative w-[114.457px]"
            data-name="ball"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 115 115"
            >
              <path
                d={svgPaths.p34cd1280}
                fill="var(--fill-0, #C4F38E)"
                id="ball"
              />
            </svg>
          </div>
        </div>
      </div>
      <Dog />
      <div className="absolute font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[0] left-[129.203px] not-italic text-[#000000] text-[47.4161px] text-center text-nowrap top-[531.06px] tracking-[0.474161px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          it’s
        </p>
      </div>
      <div className="absolute font-['Iowan_Old_Style:Black',_sans-serif] leading-[0] left-[211.999px] not-italic text-[#000000] text-[52.8px] text-center text-nowrap top-[568.993px] translate-x-[-50%]">
        <p className="block leading-[normal] whitespace-pre">play</p>
      </div>
      <div className="absolute font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[0] left-[169.962px] not-italic text-[#000000] text-[47.4161px] text-center text-nowrap top-[637.272px] tracking-[0.474161px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          time
        </p>
      </div>
    </div>
  );
}