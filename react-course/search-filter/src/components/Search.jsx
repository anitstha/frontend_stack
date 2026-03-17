import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="m-8">
      {/* searching */}
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        className="border px-3 py-1 mb-4"
      />

      {filteredUsers.map((elem) => (
        <div key={elem.id}>
          <h3>{elem.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Search;