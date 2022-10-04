import React, { useState } from 'react';

import type { IBooze } from '@/types/common';

import Card from './Card';
import Modal from './Modal';

export default function Booze(booze: Partial<IBooze>) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div
        className={`max-w-sm break-inside-avoid overflow-auto shadow-lg ${
          !toggle ? 'fadeIn' : 'fadeOut'
        }`}
      >
        <Card booze={booze} handleToggle={handleToggle} />
      </div>
      <div className={toggle ? 'fadeIn' : 'fadeOut'}>
        <Modal booze={booze} handleToggle={handleToggle} />
      </div>
    </>
  );
}
