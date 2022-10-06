import React, { memo } from 'react';

export default memo(function BoozeCardLoader() {
  const skeletonCards = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="mx-auto w-[1200px] columns-3 gap-4 space-y-6 pb-4">
      {skeletonCards.map((sc: number) => (
        <div
          key={`skeleton-card-loader-${sc}`}
          className="mx-auto h-144 w-96 max-w-sm break-inside-avoid overflow-auto rounded-md border-2"
        >
          <div className="flex h-full animate-pulse flex-row justify-center">
            <div className="my-8 flex flex-col space-y-4">
              <div className="h-48 w-80 rounded-md bg-gray-300"></div>
              <div className="h-6 w-48 space-y-8 rounded-md bg-gray-300"></div>
              <div className="h-6 w-48 rounded-md bg-gray-300"></div>
              <div className="h-6 w-48 rounded-md bg-gray-300"></div>
              <div className="h-6 w-80 rounded-md bg-gray-300"></div>
              <div className="h-6 w-80 rounded-md bg-gray-300"></div>
              <div className="h-6 w-80 rounded-md bg-gray-300"></div>
              <div className="h-6 w-80 rounded-md bg-gray-300"></div>
              <div className="flex flex-row space-x-4">
                <div className="h-8 w-24 rounded-full bg-gray-300"></div>
                <div className="h-8 w-24 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});
