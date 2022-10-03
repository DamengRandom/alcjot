import type { ReactNode } from 'react';
import React from 'react';

export default function Nav({ children }: { children: ReactNode }) {
  return <nav>{children}</nav>;
}
