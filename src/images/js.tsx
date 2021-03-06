import * as React from 'react';

function Js(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={56} height={54} viewBox="0 0 71 69" fill="none" {...props}>
      <title>JavaScript</title>
      <ellipse cx={35.5} cy={34.5} rx={35.5} ry={34.5} fill="#F4F5FF" />
      <path
        d="M70 34.5C70 52.975 54.581 68 35.5 68S1 52.975 1 34.5 16.419 1 35.5 1 70 16.025 70 34.5z"
        stroke="#6670FD"
        strokeOpacity={0.1}
        strokeWidth={2}
      />
      <path d="M19 17h33v34H19V17z" fill="#F7DF1E" />
      <path
        d="M27.677 45.413l2.525-1.575c.487.89.93 1.643 1.994 1.643 1.019 0 1.661-.41 1.661-2.008V32.61h3.101v10.91c0 3.309-1.882 4.815-4.63 4.815-2.48 0-3.92-1.324-4.651-2.922zm10.966-.343l2.525-1.506c.665 1.119 1.529 1.94 3.057 1.94 1.285 0 2.104-.662 2.104-1.575 0-1.095-.842-1.483-2.26-2.122l-.774-.343c-2.238-.98-3.722-2.213-3.722-4.815 0-2.397 1.772-4.223 4.541-4.223 1.972 0 3.39.708 4.408 2.557l-2.414 1.598c-.532-.982-1.108-1.37-1.994-1.37-.908 0-1.484.594-1.484 1.37 0 .958.576 1.346 1.905 1.94l.775.342c2.636 1.164 4.12 2.35 4.12 5.02 0 2.877-2.193 4.451-5.139 4.451-2.88 0-4.74-1.415-5.648-3.264"
        fill="#000"
      />
    </svg>
  );
}

export default Js;
