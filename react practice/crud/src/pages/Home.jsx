import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <u>
        <h1 className="text-2xl font-semibold mb-4 text-blue-800">
          List of Users
        </h1>
      </u>

      <div className="w-2/3 rounded bg-white shadow p-4 justify-center">
        <table className="w-full">
          <thead className="bg-blue-700 text-white text-left">
            <tr>
              <th className="py-1 px-2">ID</th>
              <th className="py-1 px-2">Name</th>
              <th className="py-1 px-2">Email</th>
              <th className="py-1 px-2">Phone</th>
              <th className="py-1 px-2">Website</th>
              <th className="py-1 px-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((elem) => (
              <tr
                key={elem.id}
                className="text-xs text-gray-600 text-left border-b border-gray-200"
              >
                <td className="py-1 px-2">{elem.id}</td>
                <td className="py-1 px-2">{elem.name}</td>
                <td className="py-1 px-2">{elem.email}</td>
                <td className="py-1 px-2">{elem.phone}</td>
                <td className="py-1 px-2">{elem.website}</td>
                <td className="py-1 px-2">
                  <button className="bg-green-600 text-white py-1 px-4 mr-2 cursor-pointer hover:bg-green-700 transition-all">
                    Edit
                  </button>
                  <button className="bg-red-600 text-white py-1 px-4 cursor-pointer hover:bg-red-700 transition-all">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
