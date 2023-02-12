import React from 'react';
import { Input, Button } from '../../components';
function RegistrationForm({ handleSubmit, formik, dates, months, years }) {
  return (
    <form action="" className="" onSubmit={handleSubmit}>
      <Input
        input={{
          placeholder: 'Your first name',
          name: 'firstName',
          value: formik.values.firstName,
        }}
        onChange={formik.handleChange}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <small className="text-red-500">{formik.errors.firstName}</small>
      ) : null}
      <Input
        input={{
          name: 'lastName',
          placeholder: 'Your last name',
          value: formik.values.lastName,
        }}
        onChange={formik.handleChange}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <small className="text-red-500">{formik.errors.lastName}</small>
      ) : null}
      <Input
        input={{
          name: 'email',
          placeholder: 'Email address',
          value: formik.values.email,
          type: 'email',
        }}
        onChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email ? (
        <small className="text-red-500">{formik.errors.email}</small>
      ) : null}
      <Input
        input={{
          name: 'password',
          placeholder: 'Password',
          type: 'password',
          value: formik.values.password,
        }}
        onChange={formik.handleChange}
      />
      {formik.touched.password && formik.errors.password ? (
        <small className="text-red-500">{formik.errors.password}</small>
      ) : null}
      <h3 className="mt-5 text-base font-medium">Date of Birth</h3>
      <div className="mb-2 flex w-[300px] justify-between lg:mb-0">
        <select
          name="birthDate"
          className="border-none p-2 text-sm font-medium outline-none lg:w-[20%] lg:text-base "
          value={formik.birthDate}
          onChange={formik.handleChange}
          defaultValue={formik.values.birthDate}
        >
          {dates.map((item, i) => {
            return <option>{item}</option>;
          })}
        </select>
        <select
          name="birthMonth"
          id=""
          className="border-none p-2 text-sm font-medium outline-none lg:w-[25%] lg:text-base "
          value={formik.birthMonth}
          onChange={formik.handleChange}
          defaultValue={formik.values.birthMonth}
        >
          {months.map((month) => (
            <option>{month}</option>
          ))}
        </select>
        <select
          name="birthYear"
          id=""
          className="border-none p-2 text-sm font-medium outline-none lg:w-[25%] lg:text-base "
          value={formik.birthYear}
          onChange={formik.handleChange}
          defaultValue={years[formik.values.birthYear]}
        >
          {years.map((years) => (
            <option>{years}</option>
          ))}
        </select>
      </div>
      <h3 className="mb-2 text-base font-medium">Gender</h3>
      <div className="mb-2 flex w-[300px] justify-between lg:mb-4">
        <div className="flex items-center">
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            className="mr-2"
            onChange={formik.handleChange}
          />
          <label htmlFor="male" className="text-sm font-medium lg:text-base">
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
            onChange={formik.handleChange}
          />
          <label htmlFor="female" className="text-sm font-medium lg:text-base">
            Female
          </label>
        </div>

        <div className=" flex items-center">
          <input
            id="others"
            type="radio"
            name="gender"
            value="others"
            className="mr-2"
            onChange={formik.handleChange}
          />
          <label htmlFor="others" className="text-sm font-medium lg:text-base">
            Others
          </label>
        </div>
      </div>
      {formik.touched.gender && formik.errors.gender ? (
        <small className="text-red-500">{formik.errors.gender}</small>
      ) : null}
      <div className="flex w-full items-center justify-center">
        <Button
          type="submit"
          className="w-[50%] rounded-md bg-primaryBlue py-2 px-5  text-xl font-bold text-white hover:bg-[#0864df] md:my-3 lg:w-full"
        >
          Signup
        </Button>
      </div>
    </form>
  );
}

export default RegistrationForm;
