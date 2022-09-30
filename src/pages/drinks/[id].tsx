import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Drink() {
  async function activateGraphql() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`);
    const json = await response.json();

    return json;
  }

  useEffect(() => {
    sessionStorage.setItem('gqlActive', 'yes');
    if (!sessionStorage.getItem('gqlActive')) activateGraphql();
  }, []);

  const {
    query: { id },
  } = useRouter();

  const getDrinks = gql`
    query getDrinks {
      getDrinks {
        _id
        name
        type
        from
        volume
        capcity
        price
        feel
        description
        image
      }
    }
  `;

  const { loading, error, data } = useQuery(getDrinks);

  console.info('magic time??? ', loading, error, JSON.stringify(data, null, 2));

  if (loading) return <p>Loading ..</p>;

  return <div>{id} Page</div>;
}
