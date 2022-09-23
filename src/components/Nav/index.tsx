import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <nav className="banner-bg flex justify-end px-6 py-2.5 sm:px-8">
      <li className="cursor-pointer list-none text-4xl">
        <Link href="/verify">Alcjot</Link>
      </li>
    </nav>
  );
}
