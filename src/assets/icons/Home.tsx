import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#999"
      d="M19.5 10a.5.5 0 0 0-1 0h1Zm-14 0a.5.5 0 0 0-1 0h1Zm15.146 2.354a.5.5 0 0 0 .708-.708l-.708.708ZM12 3l.354-.354a.5.5 0 0 0-.708 0L12 3Zm-9.354 8.646a.5.5 0 1 0 .708.708l-.708-.708ZM7 21.5h10v-1H7v1ZM19.5 19v-9h-1v9h1Zm-14 0v-9h-1v9h1Zm15.854-7.354-9-9-.708.708 9 9 .708-.708Zm-9.708-9-9 9 .708.708 9-9-.708-.708ZM17 21.5a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5v1Zm-10-1A1.5 1.5 0 0 1 5.5 19h-1A2.5 2.5 0 0 0 7 21.5v-1Z"
    />
  </svg>
);
export default SvgHome;