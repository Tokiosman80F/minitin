import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup=(event)=>{
    event.preventDefault()
    let form =event.target
    let email=form.useremail.value
    let password=form.password.value;
    const userInfo={email,password}
    console.log(userInfo);
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 sm:p-8 p-4 h-[320px]">
        <div className="max-w-screen-xl container mx-auto grid lg:grid-cols-2 gap-4  ">
          <div >
            <div className="max-w-lg mt-16 px-6 max-lg:hidden ">
              <h3 className="text-3xl font-bold text-white">Sign in </h3>
              <p className="text-sm mt-4 text-white">
                Using <span className="text-yellow-300 font-bold"> Firebase Authentication</span> which allows users to signin to our app using more than one signin method,including email address and password sign-in and google sign-in
              </p>
            </div>
          </div>
          {/* ---form  div----*/}
          <div className="bg-white  border-2  my-4 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max  max-lg:mx-auto">

            <form onSubmit={handleSignup}>
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Sign in</h3>
              </div>
              <div className="sm:flex sm:items-start space-x-4 max-sm:space-y-4 mb-10">
                <button
                  type="button"
                  className="py-2.5 px-4 text-sm font-semibold rounded text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none"
                >
                  <FcGoogle className="inline-block mr-2 text-xl" />
                  Sign in with Google
                </button>
              </div>
              <div>
                <label className="text-base font-bold mb-2 block  ">
                  User email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="useremail"
                    type="email"
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter user email"
                  />
                  <MdOutlineMail className="absolute right-4 text-gray-400" />
                </div>
              </div>
              <div className="mt-6">
                <label className="text-base mb-2 block font-bold">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword? "text":"password"}
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-gray-400"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-right">
                <a
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Log in
                </button>
              </div>
              <p className="text-sm mt-6 text-center">
                Don't have an account
                <Link to="/signup"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
