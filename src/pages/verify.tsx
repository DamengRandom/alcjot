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
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitting(true);

    await poster(`${process.env.NEXT_PUBLIC_BASE_URL}/verify`, data);

    localStorage.setItem('userId', watch('id'));

    goToJotPad();

    setSubmitting(false);
  };

  const verifyHandler = async () => {
    const accessToken = await getAccessToken();

    if (accessToken) goToJotPad();
  };

  useEffect(() => {
    verifyHandler();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>ID: </label>
        <input
          {...register('id', {
            required: true,
          })}
        />
        {errors?.id?.type === 'required' && <p>Please enter an ID</p>}
      </div>
      <div>
        <label>Salt: </label>
        <input
          {...register('passcode', {
            required: true,
          })}
        />
        {errors?.passcode?.type === 'required' && <p>Please enter a salt</p>}
      </div>
      <input type="submit" disabled={submiting} />
    </form>
  );
}
