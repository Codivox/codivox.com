import * as React from 'react';

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={56} height={56} viewBox="0 0 56 56" fill="none" {...props}>
      <circle cx={28} cy={28} r={28} fill="#F4F5FF" />
      <path
        d="M40.682 39.151l-7.393-7.393a10.241 10.241 0 002.294-6.465C35.583 19.617 30.966 15 25.292 15 19.616 15.001 15 19.618 15 25.293c0 5.674 4.617 10.291 10.292 10.291 2.448 0 4.696-.862 6.465-2.294l7.393 7.393a1.08 1.08 0 001.532 0 1.082 1.082 0 000-1.532zm-15.39-5.734c-4.481 0-8.125-3.644-8.125-8.125 0-4.48 3.644-8.124 8.125-8.124 4.48 0 8.124 3.644 8.124 8.125 0 4.48-3.644 8.124-8.124 8.124z"
        fill="#141633"
      />
    </svg>
  );
}

export default Search;
