export function LogoNextjs({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g clipPath="url(#nextjs-a)">
        <mask
          id="nextjs-b"
          width="16"
          height="16"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#000" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        </mask>
        <g mask="url(#nextjs-b)">
          <path fill="#000" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path
            fill="url(#nextjs-c)"
            d="M13.29 14.002 6.146 4.8H4.8v6.397h1.077v-5.03l6.567 8.486q.446-.298.846-.651"
          />
          <path fill="url(#nextjs-d)" d="M11.289 4.8h-1.067v6.4h1.067z" />
        </g>
      </g>
      <defs>
        <linearGradient
          id="nextjs-c"
          x1="9.689"
          x2="12.844"
          y1="10.356"
          y2="14.267"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="nextjs-d"
          x1="10.756"
          x2="10.738"
          y1="4.8"
          y2="9.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="nextjs-a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
