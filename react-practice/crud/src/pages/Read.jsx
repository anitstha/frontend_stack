import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Read = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`) // <-- added the `/` before id
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-gray-100">
      <div className="w-1/3 border border-gray-400 bg-white shadow-lg px-20 pt-12 pb-20 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Detail of User</h2>

        <div className="mb-2">
          <h3 className="font-light text-xs">Name: {data.name}</h3>
        </div>

        <div className="mb-2">
          <h3 className="font-light text-xs">Email: {data.email}</h3>
        </div>

        <div className="mb-3">
          <h3 className="font-light text-xs">Phone: {data.phone}</h3>
        </div>

        {/* buttons */}
        <div className="flex items-center justify-left gap-2">
          <Link
            to={`/update/${id}`}
            className="bg-green-600 text-white px-8 py-1 rounded hover:bg-green-700 transition-all"
          >
            Edit
          </Link>

          <Link
            to="/"
            className="bg-blue-600 text-white px-8 py-1 rounded hover:bg-blue-700 transition-all"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
