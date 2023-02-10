import React from 'react';

function Button({ children, className }) {
  return (
    <button className={className} type="submit">
      {children}
    </button>
  );
}

export default Button;
