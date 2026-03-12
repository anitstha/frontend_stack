import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  //handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-100">
      <div className="w-1/2 bg-white shadow-lg rounded-lg px-6 pt-4 pb-6">
        <h1 className="text-2xl font-semibold mb-4">Add a User</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 text-sm font-medium">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Submit
          </button>

          <Link
            to="/"
            className="ml-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
