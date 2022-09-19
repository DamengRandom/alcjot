import React from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import fetcher from '@/utils/fetcher';

export default function Verify() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    fetcher(`${process.env.NEXT_PUBLIC_BASE_URL}/verify`, data);
  };

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
        {errors?.passcode?.type === 'required' && (
          <p>Please enter a passcode</p>
        )}
      </div>
      <input type="submit" />
    </form>
  );
}
