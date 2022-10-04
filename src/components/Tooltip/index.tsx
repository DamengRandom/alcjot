import React, { createRef } from 'react';

export default function Tooltip({
  children,
  content,
  direction,
  styling,
}: {
  children: React.ReactNode;
  content: any;
  direction: string;
  styling: string;
}) {
  const tipRef = createRef<any>();

  function mouseEnter() {
    tipRef.current.style.opacity = 1;
    tipRef.current.style.marginLeft = '2.5rem';
  }
  function mouseLeave() {
    tipRef.current.style.opacity = 0;
    tipRef.current.style.marginLeft = '1.25rem';
  }

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div
        className={`${styling} absolute flex items-center bg-gradient-to-r transition-all duration-150`}
        style={{ [direction]: '100%', opacity: 0 }}
        ref={tipRef}
      >
        <div
          className="absolute h-3 w-3 bg-theme-300"
          style={{ [direction]: '-0.4rem', transform: 'rotate(45deg)' }}
        />
        {content}
      </div>
      {children}
    </div>
  );
}
