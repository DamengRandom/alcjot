import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import SellsForm from '@/components/SellsForm';
import { getAccessToken, poster } from '@/utils/apiCaller';

import { BoozeFields, initialBoozeFieldValues } from '../utils/AppConfig';

export default function Jotpad() {
  const router = useRouter();
  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    poster(`${process.env.NEXT_PUBLIC_BASE_URL}/boozes`, data);
  };

  const [states, setStates] = useState({
    loading: false,
    authenticated: false,
  });

  const logout = async () => {
    const currentUserId = localStorage.getItem('userId');

    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/token?id=${currentUserId}`,
      { method: 'DELETE' }
    );

    localStorage.removeItem('userId');

    setStates((prevState: any) => ({
      ...prevState,
      authenticated: false,
    }));
    router.push('/');
  };

  async function fetchToken() {
    try {
      setStates((prevState: any) => ({
        ...prevState,
        loading: true,
      }));
      const accessToken = await getAccessToken();

      if ((accessToken as any)?.token)
        setStates(() => ({
          loading: false,
          authenticated: true,
        }));
    } catch (error) {
      console.error(error);
      setStates((prevState: any) => ({
        ...prevState,
        loading: false,
      }));
    }
  }

  useEffect(() => {
    fetchToken();
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) reset(initialBoozeFieldValues);
  }, [isSubmitSuccessful, reset]);

  if (states.loading) return <p>Loading ..</p>;

  return states.authenticated ? (
    <>
      <Head>
        <meta name="description" content="Alcjot JotPad" />
        <meta property="og:title" content="Alcjot JotPad" />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <title>Alcjot FormPad | Create alchol jots & sell services</title>
      </Head>
      <section>
        <h3>Booze Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {BoozeFields.map((field, index) => (
            <div key={`${field}-${index}`}>
              <label>{field}: </label>
              {field !== 'description' ? (
                <input
                  {...register(field, {
                    required: true,
                    maxLength: 100,
                  })}
                />
              ) : (
                <textarea
                  {...register(field, {
                    required: true,
                    maxLength: 800,
                  })}
                />
              )}

              {errors?.[field]?.type === 'maxLength' && (
                <p>
                  Ooops, you need to enter a maximum value of 400 for the{' '}
                  {field}
                  field
                </p>
              )}
              {errors?.[field]?.type === 'required' && (
                <p>Ooops, you need to enter a value for field {field}</p>
              )}
            </div>
          ))}
          <input type="submit" />
        </form>
        <div>
          {BoozeFields.map((field) =>
            field === 'image' ? (
              <Image
                key="booze-form-image-field"
                src={watch('image')}
                alt="image"
                width={280}
                height={280}
              />
            ) : (
              <p key={field}>{watch(field)}</p>
            )
          )}
        </div>
      </section>
      <hr />
      <section>
        <h3>Sell Form</h3>
        <SellsForm />
      </section>
      <hr />
      <section>
        <button onClick={logout}>Logout</button>
      </section>
    </>
  ) : (
    <>
      <p>Whoops, it seems like you do not have access for this page ..</p>
      <Link href="/verify">Login now ~~</Link>
    </>
  );
}
