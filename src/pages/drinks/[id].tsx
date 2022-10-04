import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Booze from '@/components/Booze';
import SearchBar from '@/components/Booze/SearchBar';
import Nav from '@/components/Nav';
import BoozeCardLoader from '@/components/Skeleton/BoozeCardLoader';
import useDebouce from '@/hooks/useDebouce';
import { useFetch } from '@/hooks/useFetch';
import type { IBooze } from '@/types/common';

export default function Drink() {
  const {
    query: { id },
  } = useRouter();

  const [searchText, setSearchText] = useState('');
  const [currentResponse, setCurrentResponse] = useState([]);

  const [response, error, loading] = useFetch(
    // `${process.env.NEXT_PUBLIC_BASE_URL}/boozes?type=${id}`,
    `${process.env.NEXT_PUBLIC_BASE_URL}/boozes`, // test purpose
    []
  );

  useEffect(() => {
    if (response) setCurrentResponse(response);
  }, [response]);

  const debouceSearch = useDebouce(searchText, 1000);

  const handleSearch = (e: { target: { value: string } }) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (debouceSearch) {
      const theResponse = response.filter((r: IBooze) => r.name === searchText); // search by name
      setCurrentResponse(theResponse);
    }

    if (!searchText) setCurrentResponse(response); // reset filter
  }, [debouceSearch]);

  if (loading) return <BoozeCardLoader />;

  if (error) return <p>Error page ...</p>;

  return (
    <section>
      <Nav>
        <div className="flex w-full items-center justify-end">
          <div className="pr-8">
            <SearchBar
              placeholderText="Search by name ~~"
              handleSearch={handleSearch}
            />
          </div>
          <h3 className="text-4xl">Alcjot</h3>
          <i className="mt-2 pl-2 text-xl">({id})</i>
        </div>
      </Nav>
      <div className="mx-auto w-[1200px] columns-4 gap-4 space-y-4 pb-4">
        {currentResponse.map((r: IBooze) => (
          <Booze key={r.name} {...r} />
        ))}
      </div>
    </section>
  );
}
