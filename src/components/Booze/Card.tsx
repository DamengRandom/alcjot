import React from 'react';

import type { IBooze } from '@/types/common';

export default function BoozeCard({
  booze,
  handleToggle,
}: {
  booze: Partial<IBooze>;
  handleToggle: () => void;
}) {
  const { name, from, volume, capcity, feel, price, image } = booze;

  return (
    <>
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <p className="text-base text-gray-700">From: {from}</p>
        <p className="text-base text-gray-700">Price: ${price}</p>
        <p className="text-base text-gray-700">Feel: {feel}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="mr-2 mb-2 inline-block rounded-full bg-theme-300 px-3 py-1 text-sm font-semibold text-gray-700">
          Volume: {volume}
        </span>
        <span className="mr-2 mb-2 inline-block rounded-full bg-theme-500 px-3 py-1 text-sm font-semibold text-gray-700">
          Capcity: {capcity}
        </span>
        <button onClick={handleToggle}>More</button>
      </div>
    </>
  );
}
