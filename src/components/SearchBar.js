import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    onTermSubmit(term);
  };

  // const onInputChange = (event) => {
  //   setTerm(event.target.value);
  // }; // wrote an inline code for this

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Enter Page Name</label>
          <input
            type="text"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
