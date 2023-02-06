import React from 'react';
import { Input } from '../../components';
function Registration() {
  return (
    <div className="h container  flex h-screen w-full items-center ">
      <div className="flex h-1/2 w-1/2 items-start justify-center">
        <div className="text-5xl font-bold text-primaryBlue">mernbook</div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-[#20262E]">Registration</h2>
        <Input
          input={{
            placeholder: 'Your first name',
          }}
        />
        <Input
          input={{
            placeholder: 'Your last name',
          }}
        />
        <Input
          input={{
            placeholder: 'Email address',

            type: 'email',
          }}
        />
        <Input
          input={{
            placeholder: 'Password',
            type: 'password',
          }}
        />
      </div>
    </div>
  );
}

export default Registration;
