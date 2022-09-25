import Link from 'next/link';
import React from 'react';

export default function Alcohol() {
  const drinks = [
    {
      bgColor: 'brandy-bg bg-theme-100',
      description: 'A liquor produced by distilling wine',
      link: '/drinks/brandy',
      name: 'Brandy',
      volumeText: '35-60%',
    },
    {
      bgColor: 'gin-bg bg-theme-200',
      description:
        'A distilled alcoholic drink that derives its predominant flavour from juniper berries',
      link: '/drinks/gin',
      name: 'Gin',
      volumeText: '35-60%',
    },
    {
      bgColor: 'rum-bg bg-theme-300',
      description:
        'A liquor made by fermenting and then distilling sugarcane molasses or sugarcane juice',
      link: '/drinks/rum',
      name: 'Rum',
      volumeText: '40-80%',
    },
    {
      bgColor: 'tequila-bg bg-theme-400',
      description: 'A distilled beverage made from the blue agave plant',
      link: '/drinks/tequila',
      name: 'Tequila',
      volumeText: '38-55%',
    },
    {
      bgColor: 'vodka-bg bg-theme-500',
      description: 'A clear distilled alcoholic beverage',
      link: '/drinks/vodka',
      name: 'Vodka',
      volumeText: '40-55%',
    },
    {
      bgColor: 'whiskey-bg bg-theme-600',
      description:
        'A type of distilled alcoholic beverage made from fermented grain mash',
      link: '/drinks/whiskey',
      name: 'Whiskey',
      volumeText: '40-60%',
    },
  ];
  return (
    <section className="h-full">
      {drinks.map(({ bgColor, description, name, link, volumeText }, index) => (
        <div
          className={`${bgColor} flex h-full flex-col items-center justify-center px-12`}
          key={name}
        >
          <h1 className="flex w-full pb-4 text-2xl text-white">
            #. {index + 1}
          </h1>
          <div className="flex w-full flex-row items-center justify-between">
            <div>
              <h3 className="text-[4rem] font-bold text-white">{name}</h3>
              <p className="max-w-sm">
                <i className="text-white">General Brief: {description}</i>
              </p>
              <p className="pt-2 text-white">Common Volume: {volumeText}</p>
            </div>
            <div className="w-12 cursor-pointer">
              <Link href={link}>
                <svg
                  className="transition duration-300 ease-out hover:scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
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
