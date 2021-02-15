import React from 'react';

function Ellipse(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={104}
      height={104}
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={52} cy={52} r={50} stroke="#6670FD" strokeWidth={4} />
    </svg>
  );
}

export default Ellipse;
