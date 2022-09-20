import Link from 'next/link';
import type { ReactNode } from 'react';

import About from '@/components/About';
import Alcohol from '@/components/Alcohol';
import Footer from '@/components/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <main className="grid h-screen w-screen grid-rows-[3fr_2fr] md:grid-cols-[3fr_2fr]">
    {props.meta}
    <section className="h-full w-full bg-sky-400 md:h-screen">
      <Alcohol />
    </section>
    <section className="h-full w-full bg-slate-900 md:h-screen">
      <Link href="/verify">Alcjot</Link>
      <About />
      <Footer />
    </section>
  </main>
);

export { Main };
