import React from 'react';

import type { IBooze } from '@/types/common';

export default function BoozeModal({
  booze,
  handleToggle,
}: {
  booze: Partial<IBooze>;
  handleToggle: () => void;
}) {
  const { name, from, volume, capcity, feel, price, image, description } =
    booze;

  return (
    <div className={`fixed top-0 left-0 h-screen w-screen bg-white`}>
      <button onClick={handleToggle}>Back</button>
      <img className="w-1/3" src={image} alt={name} />
      <h3>{name}</h3>
      <p>From: {from}</p>
      <p>Volume: {volume}</p>
      <p>Capcity: {capcity}</p>
      <p>Feel: {feel}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
}
