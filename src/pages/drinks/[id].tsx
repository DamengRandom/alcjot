import { useRouter } from 'next/router';

import Booze from '@/components/Booze';
import Nav from '@/components/Nav';
import BoozeCardLoader from '@/components/Skeleton/BoozeCardLoader';
import { useFetch } from '@/hooks/useFetch';
import type { IBooze } from '@/types/common';

export default function Drink() {
  const {
    query: { id },
  } = useRouter();

  const [response, error, loading] = useFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/boozes?type=${id}`,
    // `${process.env.NEXT_PUBLIC_BASE_URL}/boozes`, // test purpose
    []
  );

  if (loading) return <BoozeCardLoader />;

  if (error) return <p>Error page ...</p>;

  return (
    <section>
      <Nav>
        <div className="flex w-full justify-end">
          <h3>Alcjot</h3>
          <span className="pl-2"> ({id}) </span>
          <div className="pl-8"> Search bar (debouce effect)</div>
        </div>
      </Nav>
      <div className="mx-auto w-[1200px] columns-4 gap-4 space-y-4 pb-4">
        {response.map((r: IBooze) => (
          <Booze key={r.name} {...r} />
        ))}
      </div>
    </section>
  );
}
