import Link from 'next/link';
import React from 'react';

export default function Nav() {
  const navList = [
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: '(+)',
    },
  ];
  return (
    <nav>
      {navList.map((n, i) => (
        <li key={`${n.name}-${i}`}>
          {n.path ? (
            <Link href={n.path}>{n.name}</Link>
          ) : (
            <button>{n.name}</button>
          )}
        </li>
      ))}
    </nav>
  );
}
