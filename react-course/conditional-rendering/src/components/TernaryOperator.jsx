import React from "react";

const TernaryOperator = () => {
  const isLoggedIn = true;

  return (
    <div>
      {/* ternary operator */}
      {isLoggedIn ? (
        <h1>Welcome to Home</h1>
      ) : (
        <h1>Please Login to Continue..</h1>
      )}
    </div>
  );
};

export default TernaryOperator;
