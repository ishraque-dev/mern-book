import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthActions } from '../../features/user/userAuth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Input } from '../../components/UI';
import axios from 'axios';
import usePageTitle from '../../hooks/usePageTitle';
import { useFormik } from 'formik';
import { loginPageValidationSchema } from '../../validations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const dispatch = useDispatch();
  const userCredentials = useSelector((state) => state.auth.userCredentials);
  usePageTitle('login');
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginPageValidationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      login(email, password);
    },
  });
  async function login(email, password) {
    try {
      const { data } = await axios.post('http://127.0.0.1:8000/api/v1/login', {
        email: email,
        password: password,
      });
      // console.log(data); // logged in user data
      navigate('/home'); // navigate to home
      dispatch(userAuthActions.login(data));
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      const err = await error.response.data.message;
      console.log(err);
      toast.error(err, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }
  return (
    <div className="flex h-screen w-full flex-col items-center  justify-around p-5 lg:flex-wrap">
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
        <h2 className="font-base mb-2  text-2xl text-[#20262E]">Login</h2>
        <form action="" className="" onSubmit={formik.handleSubmit}>
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

          <div className="flex w-full items-center justify-center">
            <Button
              type="submit"
              className="mt-3 w-[50%] rounded-md bg-primaryBlue py-2  px-5 text-xl font-bold text-white hover:bg-[#0864df] md:my-3 lg:w-full"
            >
              Login
            </Button>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </form>
        {/* <Link to="#">Forgot password?</Link> */}
        <p className="text-center text-sm font-medium text-primaryBlue">
          Forgot Password?
        </p>
        <hr className=" border-1 border-[#D9D9D9]" />
        <div className="flex w-full items-center justify-center">
          <Link to="/signup">
            <Button
              type="submit"
              className="m-auto rounded-md bg-primaryGreen  p-2  text-base font-bold text-white hover:bg-[#25a10c] "
            >
              Create an account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
