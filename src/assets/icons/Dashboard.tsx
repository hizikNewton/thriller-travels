

import type { SVGProps } from "react";
const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http=//www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      d="M3.25 6a2.75 2.75 0 1 0 0-5.501 2.75 2.75 0 0 0 0 5.5ZM10.75 6a2.75 2.75 0 1 0 0-5.502 2.75 2.75 0 0 0 0 5.502ZM3.25 13.501A2.75 2.75 0 1 0 3.248 8a2.75 2.75 0 0 0 0 5.501ZM10.75 13.501a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Zm0 0"

      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#999"
      strokeOpacity={1}
      strokeMiterlimit={4}
      transform="scale(1.41429)"

    />
  </svg>
);
export default SvgDashboard;
