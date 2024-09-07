import { FormControl, FormLabel } from "@chakra-ui/react";
import DropDown from "./DropDown";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className="bg-black text-center text-white p-2 lg:flex flex flex-row items-center justify-between">
      {/* Text Section */}
      <div className="w-full md:w-[95%] lg:text-right xl:text-right xxs:text-center xl:w-[98%] mb-2 md:mb-0 text-sm md:text-base">
        Summer Sale For All Swim And Free Express Delivery - OFF 50%! <span className="underline font-bold">Shop Now</span>
      </div>

      {/* Dropdown Section - Hidden on Small Screens */}
      <div className="w-1/2 md:w-auto flex justify-center  xxs:hidden xs:hidden sm:hidden md:block ">
        <DropDown />
        {
             user && user.userType === 'admin' && 
          <Button className="bg-white text-black hover:bg-black hover:text-white cursor-pointer" onClick={()=>navigate('/admin/dashboard')}>
                            <FormControl display="flex" alignItems="center">
                                <FormLabel htmlFor="email-alerts" mb="0">
                                    Admin
                                </FormLabel>
                            </FormControl>
                        </Button>
        }
      </div>
    </div>
  );
};

export default TopHeader;
