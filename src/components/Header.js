import React from "react";
import Search from "./Search";
import Submit from "./Submit";

function Header({ onSubmit, onFormSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSubmit={onSubmit} />
      <Submit onFormSubmit={onFormSubmit} />
    </header>
  );
}

export default Header;
