import React from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import fetcher from '@/utils/fetcher';

import { BoozeFields } from '../utils/AppConfig';

export default function Jotpad() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    fetcher(`${process.env.NEXT_PUBLIC_BASE_URL}/boozes`, data);
  };

  return (
    <div>
      <section>
        <h3>Booze Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {BoozeFields.slice(0, -1).map((field, index) => (
            <div key={`${field}-${index}`}>
              <label>{field}: </label>
              <input
                {...register(field as any, {
                  required: true,
                  maxLength: 400,
                })}
              />
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
          <div>
            <label>image: </label>
            <input
              {...register('image', {
                required: true,
              })}
            />
            {errors?.image?.type === 'required' && (
              <p>Ooops, you need to put an image url</p>
            )}
          </div>
          <input type="submit" />
        </form>
        <div>
          {BoozeFields.map((field) =>
            field === 'image' ? (
              <img src={watch('image')} alt="image" />
            ) : (
              <p key={field}>{watch(field)}</p>
            )
          )}
        </div>
      </section>

      <section>
        <h3>Sell Form</h3>
      </section>
    </div>
  );
}
