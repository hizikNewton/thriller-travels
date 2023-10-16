
import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} {...props}>
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        d="M19.5 7.5h-13A.5.5 0 0 0 6 8v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5ZM7 18.5v-10h12v10H7Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M19.5 7.5h-13A.5.5 0 0 0 6 8v3a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5ZM7 10.5v-2h12v2H7Z"
        clipRule="evenodd"
      />
      <path d="M8.5 8.5h1A.5.5 0 0 0 10 8V7a.5.5 0 0 0-.5-.5h-1A.5.5 0 0 0 8 7v1a.5.5 0 0 0 .5.5Zm8 0h1A.5.5 0 0 0 18 8V7a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5Zm-7.5 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
      <path
        fillRule="evenodd"
        d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5 1.5 6.649 1.5 13 6.649 24.5 13 24.5Zm0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5.5 6.096.5 13 6.096 25.5 13 25.5Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default SvgCalendar;
