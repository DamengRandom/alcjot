import React from 'react';

import { AlcjotConfigs } from '@/utils/AppConfig';

export default function Footer() {
  return (
    <div className="border-t border-gray-300 py-8 text-center text-sm">
      {new Date().getFullYear()} {AlcjotConfigs.title}. Powered by{' '}
      <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>{' '}
      {' & Developed by '}
      <a href="https://damengrandom.vercel.app/">Damengrandom</a>
    </div>
  );
}
