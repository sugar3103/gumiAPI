import React from "react";

function Header(props) {
  return (
    <div className="App">
      <header>{props.children}</header>
    </div>
  );
}

export default Header;
