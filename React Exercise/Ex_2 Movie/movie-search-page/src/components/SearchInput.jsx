import React from "react";
import { useState } from "react";
import { Button } from "./Button";

export const SearchInput = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const onClickSearch = (e) => {
    e.preventDefault();
    handleSearch(value);
  };

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter movie name"
      />
      <Button type="submit" onClick={onClickSearch} disabled={!value.trim()}>
        Search
      </Button>
    </form>
  );
};
