import Link from 'next/link';
import type { ReactNode } from 'react';

import Alcohol from '@/components/Alcohol';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <main className="grid h-screen w-screen grid-rows-[3fr_2fr] md:grid-cols-[3fr_2fr]">
    {props.meta}
    <section className="hidebar hide-section h-full w-full overflow-y-scroll bg-sky-400 md:h-screen">
      <Alcohol />
    </section>
    <section className="flex h-full w-full flex-col md:h-screen">
      <div className="flex grow flex-col justify-center text-right">
        <div className="flex justify-end">
          <Link href="/verify">
            <h1 className="cursor-pointer pr-6 text-[2rem] text-theme-100">
              Alcjot
            </h1>
          </Link>
        </div>
        <Banner />
        <div className="flex justify-end">
          <Link href="/services">
            <p className="group relative mr-6 cursor-pointer px-6 py-3 font-bold text-black">
              <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 bg-theme-300 transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
              <span className="relative">
                {'{ '} For Sale {' }'}
              </span>
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  </main>
);

export { Main };
