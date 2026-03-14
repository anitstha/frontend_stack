import { useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      {users.map((elem) => (
        <p key={elem.id}>{elem.id} - {elem.name}</p>
      ))}
    </div>
  );
};

export default FetchData;
