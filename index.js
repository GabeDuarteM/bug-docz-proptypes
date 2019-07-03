import React from "react";
import PropTypes from "prop-types";

const Index = ({ name = "world", surname }) => {
  return (
    <div>
      Hello, {name} {surname}
    </div>
  );
};

Index.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string
};

// Bugged:
const hoc = WrappedComponent => surname => props => (
  <WrappedComponent surname={surname} {...props} />
);
export default hoc(Index)("test");

// Working:
// const hoc = WrappedComponent => props => <WrappedComponent {...props} />;
// export default hoc(Index);
