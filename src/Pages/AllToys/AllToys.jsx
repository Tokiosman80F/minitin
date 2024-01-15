import { useState } from "react";
import Search from "./Search";

const AllToys = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchText);
    console.log("Search Btn is working");
  };

  return (
    <div>
      <Search
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      ></Search>
    </div>
  );
};

export default AllToys;
