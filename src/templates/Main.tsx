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
            <h4 className="cursor-pointer p-4 text-2xl text-theme-300">
              [* For Sale *]
            </h4>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  </main>
);

export { Main };
