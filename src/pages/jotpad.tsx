import React from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

export default function Jotpad() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await fetch(`${process.env.BASE_URL}/boozes`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error?.message);
    }
  };

  return (
    <div>
      <section>
        <h3>Booze Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {[
            'type',
            'name',
            'from',
            'volume',
            'capcity',
            'feel',
            'price',
            'description',
          ].map((field, index) => (
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
          <p>{watch('type')}</p>
          <p>{watch('name')}</p>
          <p>{watch('from')}</p>
          <p>{watch('volume')}</p>
          <p>{watch('capcity')}</p>
          <p>{watch('feel')}</p>
          <p>{watch('price')}</p>
          <p>{watch('description')}</p>
          <img src={watch('image')} alt="image" />
        </div>
      </section>

      <section>
        <h3>Sell Form</h3>
      </section>
    </div>
  );
}
