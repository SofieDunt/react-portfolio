import React from 'react';

/*
props:
- onClick?: (event: MouseEvent) => void
*/
const FlipIcon = ({ onClick }) => {
  return (
    <svg
      width='1.5rem'
      height='1.5rem'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
    >
      <path
        d='M17.1495 13.4005C18.2541 13.4005 19.1495 12.5051 19.1495
        11.4005V3.40051H21.1495V11.4005C21.1495 13.6097 19.3587 15.4005 17.1495
        15.4005H6.84398L10.6286 19.1852L9.21443 20.5994L2.85046 14.2354L9.21443
        7.87146L10.6286 9.28567L6.5138 13.4005H17.1495Z'
        fill='#052a57'
      />
    </svg>
  );
}

export default FlipIcon;
