export function LogoNode({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="url(#node-a)"
        d="M8.378.298a.76.76 0 0 0-.747 0l-6.165 3.53a.72.72 0 0 0-.366.64v7.074c0 .262.146.509.366.64l6.165 3.53a.76.76 0 0 0 .747 0l6.164-3.53a.72.72 0 0 0 .366-.64V4.468a.76.76 0 0 0-.366-.64z"
      />
      <mask
        id="node-b"
        width="14"
        height="16"
        x="1"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path
          fill="#fff"
          d="M8.378.298a.76.76 0 0 0-.747 0l-6.165 3.53a.72.72 0 0 0-.366.64v7.074c0 .262.146.509.366.64l6.165 3.53a.76.76 0 0 0 .747 0l6.164-3.53a.72.72 0 0 0 .366-.64V4.468a.76.76 0 0 0-.366-.64z"
        />
      </mask>
      <g mask="url(#node-b)">
        <path
          fill="url(#node-c)"
          d="m8.004-.161 6.843 4.077L8.005 16.19l-6.856-4.084z"
        />
      </g>
      <mask
        id="node-d"
        width="14"
        height="16"
        x="1"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path
          fill="#fff"
          d="M8.378.298a.76.76 0 0 0-.747 0l-6.165 3.53a.72.72 0 0 0-.366.64v7.074c0 .262.146.509.366.64l6.165 3.53a.76.76 0 0 0 .747 0l6.164-3.53a.72.72 0 0 0 .366-.64V4.468a.76.76 0 0 0-.366-.64z"
        />
      </mask>
      <g mask="url(#node-d)">
        <path
          fill="url(#node-e)"
          d="M8.004-.161 1.15 3.916 8.004 16.19l6.843-4.084z"
        />
      </g>
      <defs>
        <linearGradient
          id="node-a"
          x1="10.751"
          x2="5.957"
          y1="2.853"
          y2="14.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3F8B3D" />
          <stop offset=".64" stopColor="#3F873F" />
          <stop offset=".93" stopColor="#3DA92E" />
          <stop offset="1" stopColor="#3DAE2B" />
        </linearGradient>
        <linearGradient
          id="node-c"
          x1="7.082"
          x2="22.637"
          y1="8.575"
          y2=".11"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stopColor="#3F873F" />
          <stop offset=".4" stopColor="#52A044" />
          <stop offset=".71" stopColor="#64B749" />
          <stop offset=".91" stopColor="#6ABF4B" />
        </linearGradient>
        <linearGradient
          id="node-e"
          x1="1.18"
          x2="15.1"
          y1="7.854"
          y2="7.854"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".09" stopColor="#6ABF4B" />
          <stop offset=".29" stopColor="#64B749" />
          <stop offset=".6" stopColor="#52A044" />
          <stop offset=".86" stopColor="#3F873F" />
        </linearGradient>
      </defs>
    </svg>
  );
}
