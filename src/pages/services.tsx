import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const fetchSells = async (setSells: (sells: []) => void) => {
  let response;
  let json;

  try {
    response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/sells`);
    if (response) {
      json = await response.json();
      setSells(json);
    }
  } catch (error) {
    console.error(error?.message);
  }
};

export default function Services() {
  const router = useRouter();
  const [sells, setSells] = useState([]);

  useEffect(() => {
    fetchSells(setSells);
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Alcjot Services" />
        <meta property="og:title" content="Alcjot Services" />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <title>Alcjot Sells</title>
      </Head>
      <section>
        <div className="flex items-center justify-center">
          {sells.map((sell: any, index: number) => (
            <div
              className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md"
              key={`${sell.title}-${index}`}
            >
              <svg
                className="mb-2 h-10 w-10 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clipRule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                {sell.title}
              </h5>
              <p className="mb-3 font-normal text-gray-500 ">
                Thank you very much in advance 🤗🤗 ~~
              </p>
              <a
                href={sell.paylink}
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:underline"
                rel="noreferrer"
              >
                Support Now
                <svg
                  className="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
