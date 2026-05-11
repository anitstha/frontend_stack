import { useEffect, useState } from "react";
import axios from "axios";

const SearchByName = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState(data);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // filter function for searching
  const filter = (e) => {
    setRecords(
      data.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center gap-6">
      {/* user searching */}
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold">Search by Name :</h2>
        <input
          type="text"
          placeholder="Search user..."
          className="w-80 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 transition"
          onChange={filter}
        />
      </div>

      <table className="w-3/4 overflow-hidden rounded-xl shadow-lg bg-gray-900">
        <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <tr>
            <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              ID
            </th>
            <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Name
            </th>
            <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Email
            </th>
            <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Phone
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-700">
          {records.map((elem) => (
            <tr key={elem.id} className="hover:bg-gray-800 transition-colors">
              <td className="py-3 px-6 text-gray-300">{elem.id}</td>
              <td className="py-3 px-6 font-medium">{elem.name}</td>
              <td className="py-3 px-6 text-indigo-400">{elem.email}</td>
              <td className="py-3 px-6 text-gray-400">{elem.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchByName;
