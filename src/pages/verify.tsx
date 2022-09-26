import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { getAccessToken, poster } from '@/utils/apiCaller';

export default function Verify() {
  const router = useRouter();
  const [submiting, setSubmitting] = useState(false);
  const goToJotPad = () => {
    router.push('/jotpad');
  };

  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitting(true);

    const verifyResponse = await poster(
      `${process.env.NEXT_PUBLIC_BASE_URL}/verify`,
      data
    );

    if (verifyResponse?.isAuthenticated) {
      localStorage.setItem('userId', watch('id'));
      goToJotPad();
    } else {
      setSubmitting(false);
      reset({ id: '', passcode: '' });
    }
  };

  const verifyHandler = async () => {
    const accessToken = await getAccessToken();

    if (accessToken?.token) goToJotPad();
    else localStorage.removeItem('userId');
  };

  useEffect(() => {
    verifyHandler();
  }, []);

  return (
    <section className="flex h-screen w-full items-center justify-center">
      <form
        className="mb-4 flex w-96 flex-col rounded bg-white px-8 pt-6 pb-8 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="mb-8 text-xl">Only For Author ..</h3>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="ID"
          >
            ID:{' '}
          </label>
          <input
            className="mb-3 w-full appearance-none rounded border border-theme-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('id', {
              required: true,
            })}
          />
          {errors?.id?.type === 'required' && (
            <p className="text-xs italic text-red-500">Please enter an ID</p>
          )}
        </div>
        <div>
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="Salt"
          >
            Salt:{' '}
          </label>
          <input
            className="mb-3 w-full appearance-none rounded border border-theme-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('passcode', {
              required: true,
            })}
          />
          {errors?.passcode?.type === 'required' && (
            <p className="text-xs italic text-red-500">Please enter a salt</p>
          )}
        </div>
        {!submiting && (
          <button
            className="mt-8 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        )}
        {submiting && <p>Verifying ..</p>}
      </form>
    </section>
  );
}
