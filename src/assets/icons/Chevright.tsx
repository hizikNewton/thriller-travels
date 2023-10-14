import * as React from "react";
import type { SVGProps } from "react";
const SvgChevright = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#999"
      d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm0 1.5A8.239 8.239 0 0 1 20.25 12 8.239 8.239 0 0 1 12 20.25 8.239 8.239 0 0 1 3.75 12 8.239 8.239 0 0 1 12 3.75Zm-1.335 3.21-1.08 1.08L13.548 12l-3.962 3.96 1.08 1.08 4.5-4.5.515-.54-.515-.54-4.501-4.5Z"
    />
  </svg>
);
export default SvgChevright;
