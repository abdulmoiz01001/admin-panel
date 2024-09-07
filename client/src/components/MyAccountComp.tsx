import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyAccountComp = () => {
  // Initial form values
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    currentPassword: Yup.string().required('Current Password is required'),
    newPassword: Yup.string().required('New Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword')], 'Passwords must match')
      .required('Confirm Password is required')
  });

  // Handle form submission
  const handleSubmit = (values : any) => {
    console.log('Form data:', values);
    // Add your logic here to save the form data, e.g., make an API call
  };

  return (
    <>
      <div className='max-w-[100vw] flex flex-col justify-center items-center gap-4 min-h-[100vh]'>
        <div className='w-[85%] flex justify-start items-center'>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className='w-[85%] flex justify-between items-center'>
          <div className='w-[20%] h-[400px] flex flex-col justify-start items-start'>
            <h1 className='text-lg font-semibold'>Manage My Account</h1>
            <div className='w-[80%] ml-16 gap-4 mt-4 flex flex-col justify-start items-start'>
              <p className='text-sm'>My profile</p>
              <p className='text-sm'>Address Book</p>
              <p className='text-sm'>My Payment Options</p>
            </div>
            <h1 className='text-lg font-semibold'>My Orders</h1>
            <div className='w-[80%] ml-16 gap-4 mt-4 flex flex-col justify-start items-start'>
              <p className='text-sm'>My Returns</p>
              <p className='text-sm'>My Certifications</p>
            </div>
            <h1 className='text-lg font-semibold'>My Wishlist</h1>
          </div>

          <div className='w-[70%] px-10 h-[400px] flex flex-col justify-start items-start'>
            <h1 className='text-lg font-semibold'>Edit Your Profile</h1>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form className='w-full h-full gap-4 py-4 flex flex-col justify-start items-center'>
                  <div className='w-full flex justify-between items-center'>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="firstName" component="div" className='text-red-500 text-sm' />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="lastName" component="div" className='text-red-500 text-sm' />
                    </div>
                  </div>

                  <div className='w-full flex justify-between items-center'>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="email" component="div" className='text-red-500 text-sm' />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="address" component="div" className='text-red-500 text-sm' />
                    </div>
                  </div>

                  <div className='w-full gap-4 flex flex-col justify-start items-start'>
                    <Label htmlFor="password">Password Changes</Label>
                    <Input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      placeholder="Current Password"
                      value={values.currentPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="currentPassword" component="div" className='text-red-500 text-sm' />
                    <Input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      placeholder="New Password"
                      value={values.newPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="newPassword" component="div" className='text-red-500 text-sm' />
                    <Input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="confirmPassword" component="div" className='text-red-500 text-sm' />
                  </div>

                  <div className='w-full gap-4 flex justify-end items-center'>
                    <button type="reset" className='w-[223px] h-[56px] text-lg' disabled={isSubmitting}>Cancel</button>
                    <button type="submit" className='border-2 text-white w-[223px] bg-red-500 h-[56px] text-lg' disabled={isSubmitting}>Save Changes</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccountComp;
