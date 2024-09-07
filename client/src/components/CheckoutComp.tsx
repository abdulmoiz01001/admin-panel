import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import CheckoutOrderSummaryTable from './customs/CheckoutOrderSummaryTable'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const CheckoutComp = () => {
    const products = [
        { name: 'LCD Monitor', price: 650, image: 'https://th.bing.com/th/id/OIP.CSrSxiR7BHz26DY4xJomlAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3' },
        { name: 'H1 Gamepad', price: 1100, image: 'https://th.bing.com/th/id/OIP.CSrSxiR7BHz26DY4xJomlAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3' }
    ];

    const subtotal = products.reduce((acc, product) => acc + product.price, 0);
    const total = subtotal; // Since shipping is free, total is the same as subtotal.

    // Validation schema using Yup
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        companyName: Yup.string(),
        streetAddress: Yup.string().required('Street Address is required'),
        appartment: Yup.string(),
        townCity: Yup.string().required('Town/City is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
    });

    // Initial form values
    const initialValues = {
        firstName: '',
        companyName: '',
        streetAddress: '',
        appartment: '',
        townCity: '',
        phoneNumber: '',
        email: '',
        saveInfo: false,
    };

    // Form submission handler
    const onSubmit = (values : any) => {
        console.log('Form data', values);
    };

    return (
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

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className='w-[85%] flex justify-center items-center'>
                        <div className='w-[50%] flex flex-col gap-6 justify-start items-start'>
                            <h1 className='text-4xl font-bold'>Billing Details</h1>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="firstName">First Name</Label>
                                <Field name="firstName" as={Input} placeholder="First Name" />
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="companyName">Company Name</Label>
                                <Field name="companyName" as={Input} placeholder="Company Name" />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="streetAddress">Street Address</Label>
                                <Field name="streetAddress" as={Input} placeholder="Street Address" />
                                <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="appartment">Appartment, Floor, etc (optional)</Label>
                                <Field name="appartment" as={Input} placeholder="Appartment, Floor, etc" />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="townCity">Town/City</Label>
                                <Field name="townCity" as={Input} placeholder="Town/City" />
                                <ErrorMessage name="townCity" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="phoneNumber">Phone Number</Label>
                                <Field name="phoneNumber" as={Input} placeholder="Phone Number" />
                                <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="email">Email Address</Label>
                                <Field name="email" as={Input} type="email" placeholder="Email Address" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Field name="saveInfo" as={Checkbox} id="saveInfo" />
                                <label
                                    htmlFor="saveInfo"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Save this information for faster check-out next time
                                </label>
                            </div>

                            {/* <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                            >
                                Place Order
                            </button> */}
                        </div>

                        <div className='w-[50%]'>
                            <CheckoutOrderSummaryTable
                            isSubmitting={isSubmitting}
                                products={products}
                                subtotal={subtotal}
                                total={total}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default CheckoutComp;
