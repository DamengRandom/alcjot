import { useRouter } from 'next/router';
import React from 'react';

export default function Drink() {
  const {
    query: { id },
  } = useRouter();

  return <div>{id} Page</div>;
}
