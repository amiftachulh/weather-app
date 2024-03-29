export default function ExtremeRain(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1="52.7"
          x2="133.4"
          y1="9.6"
          y2="149.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9ca3af" />
          <stop offset=".5" stopColor="#9ca3af" />
          <stop offset="1" stopColor="#6b7280" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="99.5"
          x2="232.6"
          y1="30.7"
          y2="261.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#6b7280" />
          <stop offset=".5" stopColor="#6b7280" />
          <stop offset="1" stopColor="#4b5563" />
        </linearGradient>
        <linearGradient
          id="a"
          x1="1381.3"
          x2="1399.5"
          y1="-1144.7"
          y2="-1097.4"
          gradientTransform="rotate(-9 8002.567 8233.063)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0b65ed" />
          <stop offset=".5" stopColor="#0a5ad4" />
          <stop offset="1" stopColor="#0950bc" />
        </linearGradient>
        <linearGradient
          xlinkHref="#a"
          id="h"
          x1="1436.7"
          x2="1454.9"
          y1="-1137"
          y2="-1089.7"
          gradientTransform="rotate(-9 8009.537 8233.037)"
        />
        <linearGradient
          xlinkHref="#a"
          id="k"
          x1="1492.1"
          x2="1510.3"
          y1="-1129.3"
          y2="-1082.1"
          gradientTransform="rotate(-9 8016.566 8233.078)"
        />
        <symbol id="d" viewBox="0 0 200.3 126.1">
          <path
            fill="url(#b)"
            stroke="#848b98"
            strokeMiterlimit="10"
            d="M.5 93.2a32.4 32.4 0 0032.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 006.5-68.9 32.4 32.4 0 00-48.5-33 48.6 48.6 0 00-88.6 37.1h-1.5A32.4 32.4 0 00.5 93.1Z"
          />
        </symbol>
        <symbol id="e" viewBox="0 0 350 222">
          <path
            fill="url(#c)"
            stroke="#5b6472"
            strokeMiterlimit="10"
            strokeWidth="6"
            d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
          />
        </symbol>
        <symbol id="n" overflow="visible" viewBox="0 0 398 222">
          <use
            xlinkHref="#d"
            width="200.3"
            height="126.1"
            transform="translate(198 27)"
          >
            <animateTransform
              additive="sum"
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="translate"
              values="-9 0; 9 0; -9 0"
            />
          </use>
          <use xlinkHref="#e" width="350" height="222">
            <animateTransform
              additive="sum"
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="translate"
              values="-18 0; 18 0; -18 0"
            />
          </use>
        </symbol>
        <symbol id="o" overflow="visible" viewBox="0 0 129 57">
          <path
            fill="url(#a)"
            stroke="#0a5ad4"
            strokeMiterlimit="10"
            d="M8.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"
            opacity="0"
          >
            <animateTransform
              id="f"
              additive="sum"
              attributeName="transform"
              begin="0s; f.end+.33s"
              dur=".67s"
              type="translate"
              values="0 -60; 0 60"
            />
            <animate
              id="g"
              attributeName="opacity"
              begin="0s; g.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
              values="0; 1; 0"
            />
          </path>
          <path
            fill="url(#h)"
            stroke="#0a5ad4"
            strokeMiterlimit="10"
            d="M64.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"
            opacity="0"
          >
            <animateTransform
              id="i"
              additive="sum"
              attributeName="transform"
              begin=".33s; i.end+.33s"
              dur=".67s"
              type="translate"
              values="0 -60; 0 60"
            />
            <animate
              id="j"
              attributeName="opacity"
              begin=".33s; j.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
              values="0; 1; 0"
            />
          </path>
          <path
            fill="url(#k)"
            stroke="#0a5ad4"
            strokeMiterlimit="10"
            d="M120.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"
            opacity="0"
          >
            <animateTransform
              id="l"
              additive="sum"
              attributeName="transform"
              begin="-.33s; l.end+.33s"
              dur=".67s"
              type="translate"
              values="0 -60; 0 60"
            />
            <animate
              id="m"
              attributeName="opacity"
              begin="-.33s; m.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
              values="0; 1; 0"
            />
          </path>
        </symbol>
      </defs>
      <use
        xlinkHref="#n"
        width="398"
        height="222"
        transform="translate(68.84 145)"
      />
      <use
        xlinkHref="#o"
        width="129"
        height="57"
        transform="translate(191.5 343.5)"
      />
    </svg>
  );
}
