import { IoSearch } from "react-icons/io5";
import { useState } from "react";
const Search = ({setSearchText,handleSearch}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <form
      className=" flex my-5 justify-center "
      onSubmit={handleSearch}
    >
      {/* input box */}
      <div className="relative w-1/2">
        <div className="absolute inset-y-0  flex items-center ps-3 pointer-events-none">
          <IoSearch className="text-2xl" />
        </div>
        <input
          type="search"
          onChange={(e) => setSearchText(e.target.value)}
          className={`w-full p-4 ps-10 text-lg border-0 bg-gray-200 focus:outline-none  ${
            isFocused
              ? " border-b-[3px] border-blue-500 "
              : "border-b-[1px] border-black"
          }`}
          placeholder="Search With Toy Name"
          onFocus={handleFocus}
          onBlur={handleBlur}
          
        />
      </div>

      {/* button */}
      <button
        type="submit"
        className="text-white bg-blue-500 hover:bg-blue-800 font-semibold  text-2xl px-6 py-2"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
