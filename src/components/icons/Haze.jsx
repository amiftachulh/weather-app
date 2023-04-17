export default function Haze(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      {...props}
    >
      <defs>
        <linearGradient
          id="hazeB"
          x1={22.56}
          x2={39.2}
          y1={21.96}
          y2={50.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f3f7fe" />
          <stop offset={0.45} stopColor="#f3f7fe" />
          <stop offset={1} stopColor="#deeafb" />
        </linearGradient>
        <linearGradient
          id="hazeA"
          x1={17.94}
          x2={26.94}
          y1={55.73}
          y2={71.32}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d7dd" />
          <stop offset={0.45} stopColor="#d4d7dd" />
          <stop offset={1} stopColor="#bec1c6" />
        </linearGradient>
        <linearGradient
          xlinkHref="#hazeA"
          id="hazeC"
          x1={28.81}
          x2={37.81}
          y1={49.45}
          y2={65.04}
        />
        <linearGradient
          xlinkHref="#hazeA"
          id="hazeD"
          x1={37.06}
          x2={46.06}
          y1={44.68}
          y2={60.27}
        />
        <linearGradient
          xlinkHref="#hazeA"
          id="hazeE"
          x1={17.94}
          x2={26.94}
          y1={49.73}
          y2={65.32}
        />
        <linearGradient
          xlinkHref="#hazeA"
          id="hazeF"
          x1={28.81}
          x2={37.81}
          y1={43.45}
          y2={59.04}
        />
        <linearGradient
          xlinkHref="#hazeA"
          id="hazeG"
          x1={37.06}
          x2={46.06}
          y1={38.68}
          y2={54.27}
        />
      </defs>
      <path
        fill="url(#hazeB)"
        stroke="#e6effc"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14z"
      />
      <g>
        <path
          fill="none"
          stroke="url(#hazeA)"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
          d="M17 58h4.5"
        />
        <path
          fill="none"
          stroke="url(#hazeC)"
          strokeDasharray="7 7"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
          d="M28.5 58H39"
        />
        <path
          fill="none"
          stroke="url(#hazeD)"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
          d="M42.5 58H47"
        />
        <animateTransform
          attributeName="transform"
          begin="0s"
          dur="5s"
          repeatCount="indefinite"
          type="translate"
          values="-3 0; 3 0; -3 0"
        />
      </g>
      <g>
        <path
          fill="none"
          stroke="url(#hazeE)"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
          d="M17 52h4.5"
        />
        <path
          fill="none"
          stroke="url(#hazeF)"
          strokeDasharray="7 7"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
          d="M28.5 52H39"
        />
        <path
          fill="none"
          stroke="url(#hazeG)"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
          d="M42.5 52H47"
        />
        <animateTransform
          attributeName="transform"
          begin="-4s"
          dur="5s"
          repeatCount="indefinite"
          type="translate"
          values="-3 0; 3 0; -3 0"
        />
      </g>
    </svg>
  );
}
