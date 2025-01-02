import { ChangeEvent, FC } from "react";
import { TextField } from "@mui/material";

type SearchProps = {
  query: string;
  onSearch: (query: string) => void;
};

export const SearchBar: FC<SearchProps> = ({ query, onSearch }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <search>
      <TextField
        type="search"
        id="search"
        name="search"
        label="Search"
        placeholder="Enter word"
        value={query}
        onChange={handleChange}
        autoComplete="off"
        variant="outlined"
      />
    </search>
  );
};
