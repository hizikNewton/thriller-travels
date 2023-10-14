import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#999"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M19.84 7.265 12 13.035l-7.84-5.77m-.925-1.91a1 1 0 0 0-1 1V17.66a1 1 0 0 0 1 1h17.53a1 1 0 0 0 1-1V6.34a1 1 0 0 0-1-1H3.235v.015Z"
    />
  </svg>
);
export default SvgMail;
