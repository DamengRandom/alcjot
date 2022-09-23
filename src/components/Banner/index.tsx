import React from 'react';

export default function Banner() {
  return (
    <section className="flex flex-col p-4 text-right dark:bg-gray-800 md:px-6 md:py-2">
      <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        DO MORE OF WHAT MAKES YOU <span>HAPPY</span>
      </h2>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Just recording some drinks as I have known. little jots makes life a bit
        colourful ~~
      </p>
      <div className="flex w-full justify-end text-right">
        <a
          href="mailto:damonmaozewu@gmail.com"
          className="ml-4 font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
        >
          Email
        </a>
        <a
          href="###"
          className="ml-4 font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
        >
          WeChat
        </a>
        <a
          href="https://github.com/DamengRandom"
          className="ml-4 font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
        >
          Github
        </a>
      </div>
    </section>
  );
}
