import React, { useEffect } from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { poster } from '@/utils/apiCaller';
import { initialSellFormFieldsValues, SellFormFields } from '@/utils/AppConfig';

export default function SellsForm() {
  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    poster(`${process.env.NEXT_PUBLIC_BASE_URL}/sells`, data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset(initialSellFormFieldsValues);
  }, [isSubmitSuccessful, reset]);

  return (
    <section>
      <h3>Sells Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {SellFormFields.map((field, index) => (
          <div key={`${field}-${index}`}>
            <label>{field}: </label>
            <input
              {...register(field, {
                required: true,
                maxLength: 200,
              })}
            />

            {errors?.[field]?.type === 'maxLength' && (
              <p>
                Ooops, you need to enter a maximum value of 200 for the {field}
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
        {SellFormFields.map((field) => (
          <p key={field}>{watch(field)}</p>
        ))}
      </div>
    </section>
  );
}
