import * as React from 'react';

function Gatsby(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={55} height={54} viewBox="0 0 70 69" fill="none" {...props}>
      <title>Gatsby</title>
      <ellipse cx={35} cy={34.5} rx={35} ry={34.5} fill="#F4F5FF" />
      <path
        d="M69 34.5C69 52.988 53.791 68 35 68S1 52.988 1 34.5 16.209 1 35 1s34 15.012 34 33.5z"
        stroke="#6670FD"
        strokeOpacity={0.1}
        strokeWidth={2}
      />
      <path
        d="M35.5 14C23.625 14 14 23.177 14 34.5S23.625 55 35.5 55 57 45.823 57 34.5 47.375 14 35.5 14zM18.62 34.713l16.656 15.882c-9.147-.113-16.537-7.16-16.656-15.882zm20.659 15.48L19.04 30.897c1.717-7.155 8.433-12.495 16.459-12.495 5.609 0 10.58 2.609 13.65 6.624l-2.338 1.966c-2.49-3.405-6.628-5.633-11.312-5.633-5.963 0-11.042 3.611-12.962 8.665l17.656 16.833c4.288-1.48 7.585-4.931 8.69-9.205h-7.318V34.5h10.82c-.003 7.652-5.603 14.056-13.107 15.693z"
        fill="#744C9E"
      />
    </svg>
  );
}

export default Gatsby;
