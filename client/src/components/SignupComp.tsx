import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { apiClient } from '@/lib/api-client';
import { SIGNUP_ROUTE } from '@/utils/constants';
import { toast } from 'sonner';


// Validation Schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
    name: Yup.string().required('Name is required'),
});

const createUser = async (values: any) => {
    try {
        console.log(values);
       const response = await apiClient.post(SIGNUP_ROUTE, {
            email: values.email,
            password: values.password,
            name: values.name,
       },{ withCredentials: true });
        console.log(response);

        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data));
        
        if(response.status === 201){
            toast.success('User created successfully');
            return true;
        }else{
            toast.error('Failed to create user');
            return false;
        }
      
  
    } catch (error) {
        console.error(error);
        return false;
    }
}

const SignupComp = () => {
  const navigate = useNavigate();
  // Using Formik for form state management
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '', // Add the 'name' property here
    },
    validationSchema: validationSchema,
    onSubmit: async(values : any) => {
      // Handle form submission
    const res =  await createUser(values)

    if (res) {
        // console.log('User created successfully');
        toast.success('User created successfully');
        navigate(`/verifyotp/${values.email}`);
    } else {
        // console.log('Failed to create user');
        toast.error('Failed to create user');
    }
    

     
    },
  });

  return (
    <div className="max-w-[100vw] py-8 flex justify-center items-center">
      <div className="w-[50%] flex justify-center items-center">
        <img src="login.png" alt="img" className="w-full h-full" />
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center">
        <form onSubmit={formik.handleSubmit} className="w-[50%] flex flex-col gap-6">
          <h1 className="text-4xl font-bold">Create an account</h1>
          <p className="text-lg">Enter your details below</p>

          <Input 
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`outline-none border-none ${
              formik.touched.name && formik.errors.name ? 'border-red-500' : ''
            }`}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name.toString()}</div>
            ) : null}

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
            <div className="text-red-500 text-sm">{String(formik.errors.email)}</div>
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
            <div className="text-red-500 text-sm">{String(formik.errors.password)}</div>
          ) : null}

          <div className="w-full flex justify-between items-center">
            <Button type="submit" className="w-full active:scale-95 cursor-pointer">
                Sign Up
            </Button>
            
            {/* <Label className="text-sm cursor-pointer">Forgot Password?</Label> */}
          </div>
          {/* google sigin button */}
            <Button type="submit" className="w-full active:scale-95 cursor-pointer">
                Sign Up with Google
            </Button>
            <Label className="text-sm cursor-pointer">Already have an account?
                <Link to="/login" className="text-blue-500"> Log in</Link>
            </Label>
        </form>
      </div>
    </div>
  );
};

export default SignupComp;
