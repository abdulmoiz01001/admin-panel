import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { apiClient } from '@/lib/api-client';
import { LOGIN_ROUTE } from '@/utils/constants';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

// Validation Schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginComp = () => {
  const navigate = useNavigate();
  const loginUser = async (values: any) => {
    try {
      console.log(values);
      const response = await apiClient.post(LOGIN_ROUTE, {
        email: values.email,
        password: values.password
      },
      { withCredentials: true }
    );
      console.log(response.data.data);

      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data));

      if(response.status === 200){
        toast.success('User logged in successfully');
        navigate('/');
      }
      // Add your login logic here
    } catch (error) {
      toast.error('Failed to login user');
      console.error(error);
    }
  }
  // Using Formik for form state management
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Handle form submission
      console.log(values);
      await loginUser(values);
    },
  });

  return (
    <div className="max-w-[100vw] py-8 flex justify-center items-center">
      <div className="w-[50%] flex justify-center items-center">
        <img src="login.png" alt="img" className="w-full h-full" />
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center">
        <form onSubmit={formik.handleSubmit} className="w-[50%] flex flex-col gap-6">
          <h1 className="text-4xl font-bold">Log in to Exclusive</h1>
          <p className="text-lg">Welcome back! Please login to your account</p>

          <Input
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`outline-none border-none ${
              formik.touched.email && formik.errors.email ? 'border-red-500' : ''
            }`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}

          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`outline-none border-none ${
              formik.touched.password && formik.errors.password ? 'border-red-500' : ''
            }`}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}

          <div className="w-full flex justify-between items-center">
            <Button type="submit" className="w-[48%] active:scale-95 cursor-pointer">
              Login
            </Button>
            <Label className="text-sm cursor-pointer">Forgot Password?</Label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;
