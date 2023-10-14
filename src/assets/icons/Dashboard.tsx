import type { SVGProps } from "react";
const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <g
      stroke="#999"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#dashboard_svg__a)"
    >
      <path d="M3.25 6a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM10.75 6a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM3.25 13.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM10.75 13.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z" />
    </g>
    <defs>
      <clipPath id="dashboard_svg__a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDashboard;
