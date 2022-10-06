import React, { useState } from 'react';

import type { IBooze } from '@/types/common';

import Card from './Card';
import Modal from './Modal';

export default function Booze(booze: Partial<IBooze>) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    document.body.style.overflow = !toggle ? 'hidden' : 'auto';
  };

  return (
    <>
      <div className={`${!toggle ? 'fadeIn' : 'fadeOut'}`}>
        <Card booze={booze} handleToggle={handleToggle} />
      </div>
      <div className={toggle ? 'fadeIn' : 'fadeOut'}>
        <Modal booze={booze} handleToggle={handleToggle} />
      </div>
    </>
  );
}
