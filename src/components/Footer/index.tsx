import React from 'react';

import { AlcjotConfigs } from '@/utils/AppConfig';

export default React.memo(function Footer() {
  return (
    <div className="py-8 px-6 text-right text-sm">
      @{new Date().getFullYear()} {AlcjotConfigs.title} -{' '}
      <a href="https://damengrandom.vercel.app/">Damengrandom</a>
      {/* <span className="text-xs">
        {' ('}
        Templated from{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru{')'}</a>
      </span> */}
    </div>
  );
});
