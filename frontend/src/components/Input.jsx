import React from 'react';

function Input({ input, onChange, className }) {
  const defaultClassName =
    'bg-white w-full rounded-lg border-2 border-borderColor py-2 px-3 outline-none';
  return (
    <input
      {...input}
      onChange={onChange}
      className={className || defaultClassName}
    />
  );
}

export default Input;
