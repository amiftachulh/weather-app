export default function OvercastClouds(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
      <defs>
        <linearGradient
          id="overcastA"
          x1={40.76}
          x2={50.83}
          y1={23}
          y2={40.46}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9ca3af" />
          <stop offset={0.45} stopColor="#9ca3af" />
          <stop offset={1} stopColor="#6b7280" />
        </linearGradient>
        <linearGradient
          id="overcastB"
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
      </defs>
      <path
        fill="url(#overcastA)"
        stroke="#848b98"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M34.23 33.45a4.05 4.05 0 0 0 4.05 4h16.51a4.34 4.34 0 0 0 .81-8.61 3.52 3.52 0 0 0 .06-.66 4.06 4.06 0 0 0-6.13-3.48 6.08 6.08 0 0 0-11.25 3.19 6.34 6.34 0 0 0 .18 1.46h-.18a4.05 4.05 0 0 0-4.05 4.1z"
      >
        <animateTransform
          attributeName="transform"
          dur="7s"
          repeatCount="indefinite"
          type="translate"
          values="-2.1 0; 2.1 0; -2.1 0"
        />
      </path>
      <path
        fill="url(#overcastB)"
        stroke="#e6effc"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14z"
      >
        <animateTransform
          attributeName="transform"
          dur="7s"
          repeatCount="indefinite"
          type="translate"
          values="-3 0; 3 0; -3 0"
        />
      </path>
    </svg>
  );
}
