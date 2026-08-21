import { useAuth } from './AuthContext';

const Navbar = () => {
  const { user, logout, login } = useAuth();

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      {user ? (
        <>
          <span>Welcome, {user.name}! </span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Anit")}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;