import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components';
import {
  generateDates,
  generateMonths,
  generateYear,
} from '../../functions/generateItems';
function Registration() {
  const dates = generateDates();
  const months = generateMonths();
  const years = generateYear();
  console.log(years);
  return (
    <div className="h container  flex h-screen w-full items-center ">
      <div className="flex h-1/2 w-1/2 items-start justify-center">
        <div className="text-5xl font-bold text-primaryBlue">mernbook</div>
      </div>
      <div className="flex flex-col gap-3">
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
        <h3 className="text-xl font-medium">Date of Birth</h3>
        <div className="flex w-[300px] justify-between">
          <select
            name=""
            id=""
            className="w-[20%] border-none p-2 outline-none"
          >
            {dates.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <select
            name=""
            id=""
            className="w-[25%] border-none p-2 outline-none"
          >
            {months.map((month) => (
              <option>{month}</option>
            ))}
          </select>
          <select
            name=""
            id=""
            className="w-[24%] border-none p-2 outline-none"
          >
            {years.map((years) => (
              <option>{years}</option>
            ))}
          </select>
        </div>
        <h3 className="text-xl font-medium">Gender</h3>
        <div className="flex w-[300px] justify-between">
          <div className="flex items-center">
            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
              className="mr-2"
            />
            <label htmlFor="male" className="text-base font-medium">
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              className="mr-2"
            />
            <label htmlFor="female" className="text-base font-medium">
              Female
            </label>
          </div>
          <div className="mb-3 flex items-center">
            <input
              id="others"
              type="radio"
              name="gender"
              value="others"
              className="mr-2"
            />
            <label htmlFor="others" className="text-base font-medium">
              Others
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md bg-primaryBlue py-2 px-5 text-xl font-bold text-white hover:bg-[#0864df]"
        >
          Signup
        </button>
        {/* <Link to="#">Forgot password?</Link> */}
        <p className="text-center text-sm font-medium text-primaryBlue">
          Forgot Password?
        </p>
        <hr className=" border-1 border-[#D9D9D9]" />
        <button
          type="submit"
          className="m-auto w-[50%] rounded-md bg-primaryGreen  py-2  text-base font-bold text-white hover:bg-[#25a10c] "
        >
          Already have one
        </button>
      </div>
    </div>
  );
}

export default Registration;
