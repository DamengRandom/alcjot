import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Drink() {
  function activateGraphql() {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/graphql`);
  }
  
  useEffect(() => {
    activateGraphql();
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

  console.info('magic time??? ', loading, error, data);

  if (loading) return <p>Loading ..</p>;

  return <div>{id} Page</div>;
}
