import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search characters"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        className="search"
      />
    </div>
  );
};

export default Search;
