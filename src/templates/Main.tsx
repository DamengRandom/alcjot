import type { ReactNode } from 'react';

import About from '@/components/About';
import Alcohol from '@/components/Alcohol';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

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
    <section className="flex h-full w-full flex-col md:h-screen">
      <Nav />
      <Banner />
      <About />
      <Footer />
    </section>
  </main>
);

export { Main };
