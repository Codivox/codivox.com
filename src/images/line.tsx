import React from 'react';

function LineComponent(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      id="svg"
      width={43}
      height={1000}
      viewBox="0 0 43 1090"
      fill="none"
      {...props}
    >
      <path d="M21.5 21v1047" stroke="#E7E8EB" strokeWidth={4} />
      <path
        className="line"
        d="M21.5 21v1047"
        stroke="#6670FD"
        strokeWidth={4}
      />
      <path
        className="ball ball3"
        d="M21.96 691.969c-10.493 0-19-8.507-19-19 0-10.494 8.507-19 19-19 10.494 0 19 8.506 19 19 0 10.493-8.506 19-19 19z"
        fill="#E7E8EB"
        stroke="#E7E8EB"
        strokeWidth={4}
      />
      <path
        className="ball ball2"
        d="M21.96 371.849c-10.493 0-19-8.506-19-19 0-10.493 8.507-19 19-19 10.494 0 19 8.507 19 19 0 10.494-8.506 19-19 19z"
        fill="#E7E8EB"
        stroke="#E7E8EB"
        strokeWidth={4}
      />
      <path
        className="ball ball1"
        d="M21.96 40.383c-10.493 0-19-8.507-19-19 0-10.494 8.507-19 19-19 10.494 0 19 8.506 19 19 0 10.493-8.506 19-19 19z"
        fill="#E7E8EB"
        stroke="#E7E8EB"
        strokeWidth={4}
      />
      <path
        className="ball ball4"
        d="M21.011 1087.49c10.493 0 19-8.51 19-19 0-10.5-8.507-19-19-19s-19 8.5-19 19c0 10.49 8.507 19 19 19z"
        fill="#E7E8EB"
        stroke="#E7E8EB"
        strokeWidth={4}
      />
      <path
        d="M14.504 1068.28a1.478 1.478 0 00-2.016-.12 1.316 1.316 0 00-.134 1.92l5 5.45c.554.61 1.535.63 2.113.04l12.143-12.27c.542-.55.516-1.41-.058-1.93a1.482 1.482 0 00-2.02.06l-11.063 11.18-3.965-4.33z"
        fill="#fff"
      />
    </svg>
  );
}

export default LineComponent;
