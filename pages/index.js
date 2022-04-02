import React from "react";

function Homepage(props) {
  return (
    <div>
      <h1>Welcome to {props.blogTitle}!</h1>
    </div>
  );
}

Homepage.getInitialProps = () => {
  return {
    blogTitle: "WATCĦBAR",
  };
};

export default Homepage;
