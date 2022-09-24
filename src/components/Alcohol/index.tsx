import Link from 'next/link';
import React from 'react';

export default function Alcohol() {
  const drinks = [
    {
      name: 'Brandy',
      imagePath: '/assets/images/rum-link-1.png',
      imageSize: 'w-32',
      volumeText: 'Vol: 40-80%',
      link: '/brandy',
    },
    {
      name: 'Gin',
      imagePath: '/assets/images/rum-link-1.png',
      imageSize: 'w-32',
      volumeText: 'Vol: 40-80%',
      link: '/gin',
    },
    {
      name: 'Rum',
      imagePath: '/assets/images/rum-link-1.png',
      imageSize: 'w-32',
      volumeText: 'Vol: 40-80%',
      link: '/rum',
    },
    {
      name: 'Tequila',
      imagePath: '/assets/images/rum-link-1.png',
      imageSize: 'w-32',
      volumeText: 'Vol: 40-80%',
      link: '/tequila',
    },
    {
      imagePath: '/assets/images/rum-link-1.png',
      imageSize: 'w-32',
      link: '/vodka',
      name: 'Vodka',
      volumeText: 'Vol: 40-80%',
    },
    {
      name: 'Whiskey',
      imagePath: '/assets/images/rum-link-1.png',
      imageSize: 'w-32',
      volumeText: 'Vol: 40-80%',
      link: '/whiskey',
    },
  ];
  return (
    <section className="h-full">
      {drinks.map(({ name, imagePath, imageSize, link, volumeText }, index) => (
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`bg-theme-${
            index + 1
          }00 flex h-full flex-col items-center justify-center px-12`}
          key={name}
        >
          <h1 className="flex w-full pb-4 text-2xl text-white">
            #. {index + 1}
          </h1>
          <img className={`${imageSize} pb-4`} src={imagePath} alt={name} />
          <div className="flex w-full flex-row items-center justify-between">
            <div>
              <p className="text-white">{volumeText}</p>
              <h3 className="text-[1rem] font-bold text-white">{name}</h3>
            </div>
            <div className="w-8 cursor-pointer">
              <Link href={link}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    fill="white"
                    d="M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z"
                  />
                </svg>
                {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
