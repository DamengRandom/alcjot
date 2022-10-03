import { useRouter } from 'next/router';

import Nav from '@/components/Nav';
import { useFetch } from '@/hooks/useFetch';

export default function Drink() {
  const {
    query: { id },
  } = useRouter();

  const [response, error, loading] = useFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/boozes?type=${id}`,
    []
  );

  if (loading) return <p>Loading ..</p>;

  if (error) return <p>Error page ...</p>;

  console.info('re-rendered??');

  return (
    <section>
      <Nav>
        <li>
          <h3>Alcjot</h3>
          <span> - {id}</span>
        </li>
      </Nav>
      {response.map((r: any) => (
        <div key={r.name}>{r.name}</div>
      ))}
    </section>
  );
}
