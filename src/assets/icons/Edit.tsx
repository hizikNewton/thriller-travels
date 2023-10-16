import * as React from "react";
import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="m12 15 8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zm4-10 3 3" />
      <path d="M9 7.07A7 7 0 0 0 10 21a7 7 0 0 0 6.929-6" />
    </g>
  </svg>
);
export default SvgEdit;
