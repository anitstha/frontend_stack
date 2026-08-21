import { IoSchoolSharp } from "react-icons/io5";
import { FiHelpCircle, FiUser } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { AiOutlineLock, AiOutlineEye } from "react-icons/ai";

const PortalLogin = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* Top Navbar */}
      <div className="w-full bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 font-semibold text-gray-800 text-lg">
          <IoSchoolSharp className="text-blue-600 text-2xl" />
          School Showcase
        </div>
        <FiHelpCircle className="text-gray-500 text-xl cursor-pointer" />
      </div>

      {/* Main Container */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left Panel */}
          <div className="relative bg-gradient-to-br from-blue-700 to-blue-500 text-white p-12 flex flex-col justify-between">
            <div>
              <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                Secure Portal Access
              </span>

              <h1 className="text-4xl font-bold mt-8 leading-snug">
                Empowering the next generation of learners.
              </h1>

              <p className="mt-6 text-white/80 text-lg">
                Access your academic dashboard, track performance, and stay
                connected with your educational community.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl mt-10">
              <p className="font-semibold">Latest Update</p>
              <p className="text-sm mt-1 text-white/80">
                Registration for the 2024 Fall Showcase is now open. Check your
                dashboard after logging in to register your projects.
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <div className="p-12 bg-blue-50">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 mt-2">
              Please enter your credentials to access your school's portal.
            </p>

            <form className="mt-8 space-y-6">
              {/* Subdomain */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  School Subdomain
                </label>
                <div className="flex items-center mt-2 bg-white border rounded-lg px-3 py-3">
                  <HiOutlineGlobeAlt className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="e.g. greenwood.edu-saas.com"
                    className="w-full outline-none text-sm"
                  />
                </div>
              </div>

              {/* Username */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="flex items-center mt-2 bg-white border rounded-lg px-3 py-3">
                  <FiUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full outline-none text-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <div className="flex items-center mt-2 bg-white border rounded-lg px-3 py-3">
                  <AiOutlineLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full outline-none text-sm"
                  />
                  <AiOutlineEye className="text-gray-400 cursor-pointer" />
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-blue-600" />
                Remember this device
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md transition"
              >
                Sign In to Portal →
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Don't have an account?{" "}
                <span className="text-blue-600 font-medium cursor-pointer">
                  Contact your school administrator
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm py-6">
        © 2026 School Showcase SaaS Platform. All rights reserved.
      </div>
    </div>
  );
};

export default PortalLogin;
