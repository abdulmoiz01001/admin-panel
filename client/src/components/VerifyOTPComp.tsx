import React, { useCallback, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { apiClient } from '@/lib/api-client';
import { CREATE_PRODUCT_ROUTE, VERIFY_USER_ROUTE} from '@/utils/constants';
import { toast } from 'sonner';
import { useParams } from 'react-router-dom';


// Validation Schema using Yup
const validationSchema = Yup.object({
 otp: Yup.string().required('OTP is required').min(6, 'OTP must be at least 6 characters'),
});


const verfyUser = async (values: any , email : string) => {
  try {
    console.log(values);
    const response = await apiClient.post(VERIFY_USER_ROUTE, {
           otp : values.otp,
           email : email
          });
          console.log(response);

          if(response.status === 200){
              toast.success('User verified successfully');
              return true;
          }else{
              toast.error('Failed to verify user');
              return false;
          }
          
          return true;
          
        } catch (error) {
        console.error(error);
        return false;
      }
    }

    const VerifyOTPComp = () => {
      const { email } = useParams();

      // useEffect is necessary only if you want to perform some side effects
      useEffect(() => {
        console.log(email);
      }, [email]);
  const navigate = useNavigate();
  // Using Formik for form state management
  const formik = useFormik({
    initialValues: {
     
      otp: '', // Add the 'name' property here
    },
    validationSchema: validationSchema,
    onSubmit: async(values : any) => {
      // Handle form submission
      if (!email) {
        return toast.error('Email is required');
      }
    const res =  await verfyUser(values , email)

    if (res) {
       
        toast.success('User verified successfully');
        navigate('/login');

    } else {
        toast.error('Failed to verify user');
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
          <h1 className="text-4xl font-bold">Verify An Account</h1>
          <p className="text-lg">Enter your OTP below</p>

            {/* OTP */}

           <Input
            name="otp"
            type="text"
            placeholder="Enter OTP"
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full"

            />
            {
            formik.touched.otp && formik.errors.otp ? (
              <Label className="text-red-500">{String(formik.errors.otp)}</Label>
            ) : null
            }


          <div className="w-full flex justify-between items-center">
            <Button type="submit" className="w-full active:scale-95 cursor-pointer">
                Verify OTP
            </Button>
            
          </div>
            
            <Label className="text-sm cursor-pointer">Already have an account?
                <Link to="/login" className="text-blue-500"> Log in</Link>
            </Label>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTPComp;
