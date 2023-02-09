import * as Yup from 'yup';
// SIGNUP PAGE VALIDATION SCHEMA FOR FORMIK BY FORMIK>YUP
export const signupValidationSchema = Yup.object({
  firstName: Yup.string()
    .min(3)
    .max(15, 'Must be 3 characters and less than 16')
    .required('Please enter your first name'),
  lastName: Yup.string()
    .min(3)
    .max(20, 'Must be 3 characters and less than 16')
    .required('Please enter your last name'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email address'),
  password: Yup.string()
    .min(8, 'Must be 8 characters')
    .required('Please enter your password'),
  gender: Yup.string().required('Please select your gender'),
});
