import { IoSchoolSharp } from "react-icons/io5";

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 text-4xl font-bold mb-4">
          <IoSchoolSharp
            size={55}
            className="bg-blue-400 text-white p-3 rounded-2xl shadow-md"
          />
          <h1 className="text-gray-800">School Portal</h1>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700">
          Welcome Back, Administrator
        </h2>

        <p className="text-gray-500 mt-2 text-lg">
          Please enter your credentials to access the dashboard.
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <form className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="text"
              placeholder="admin@school.edu"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              Remember me
            </label>

            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition shadow-md"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 Sochau Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
