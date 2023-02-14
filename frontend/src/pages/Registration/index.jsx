import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button } from '../../components/UI';
import usePageTitle from '../../hooks/usePageTitle';
import { signupValidationSchema } from '../../validations';
import { RegistrationForm } from '../../components/auth';
import {
  generateDates,
  generateMonths,
  generateYear,
} from '../../functions/generateItems';

function Registration() {
  // PAGE LOGICS
  usePageTitle('Signup');
  // GENERATING SELECT VALUES DYNAMICALLY
  const dates = generateDates();
  const months = generateMonths();
  const years = generateYear();
  // FORMIK
  const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: new Date().getDate(),
    birthMonth: months[new Date().getMonth()],
    birthYear: new Date().getFullYear(),
    gender: '',
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: signupValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      await signup(values);
    },
  });
  //
  // SUBMIT HANDLERS
  const signup = async function (values) {
    // const userData = Object.assign(values, {
    //   birthDate: values.birthDate === '' ? '12.12.' : values.birthDate,
    // });

    try {
      const data = await axios.post('http://127.0.0.1:8000/api/v1/signup', {
        ...values,
      });
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleSubmit = function (e) {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div className="flex h-screen w-full flex-wrap  items-center p-5 lg:justify-around">
      <div className="flex w-full flex-col items-start md:items-center lg:w-1/2 lg:justify-center">
        <div className="mb-5  text-2xl font-bold text-primaryBlue md:text-4xl lg:mb-10 lg:text-7xl">
          mernbook
        </div>
        <img
          src="./imgs/signup.png"
          alt=""
          className="hidden md:block lg:block"
        />
        <small className="hidden font-medium text-primaryBlue md:block lg:mt-20 lg:block">
          Mernbook helps you connect and share with the people in your life.
          Signup now!
        </small>
      </div>

      <div className="flex flex-col gap-2 lg:w-[30%]">
        <h2 className="font-base mb-2  text-2xl text-[#20262E]">Signup</h2>
        {/* <form action="" className="" onSubmit={handleSubmit}>
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
              <label
                htmlFor="male"
                className="text-sm font-medium lg:text-base"
              >
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
              <label
                htmlFor="female"
                className="text-sm font-medium lg:text-base"
              >
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
              <label
                htmlFor="others"
                className="text-sm font-medium lg:text-base"
              >
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
        </form> */}
        <RegistrationForm
          handleSubmit={handleSubmit}
          formik={formik}
          dates={dates}
          months={months}
          years={years}
        />
        {/* <Link to="#">Forgot password?</Link> */}
        <p className="text-center text-sm font-medium text-primaryBlue">
          Forgot Password?
        </p>
        <hr className=" border-1 border-[#D9D9D9]" />
        <div className="flex w-full items-center justify-center">
          <Link to="/">
            <Button className="m-auto   rounded-md bg-primaryGreen  p-2  text-base font-bold text-white hover:bg-[#25a10c] ">
              Already have one
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
