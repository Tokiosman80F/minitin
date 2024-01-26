import  { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
const FilterButton = ({setFilter}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative w-[200px]  ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" hover:rounded-lg bg-blue-500 text-white w-full capitalize py-2 font-semibold flex items-center justify-around rounded-md "
        >
          Filter With Price {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </button>
        {/* drop down menu */}
        {isOpen && 
          <ul className=" z-20 absolute border-2 rounded-xl w-full top-11 text-black py-2 px-2 flex flex-col  " style={{width:'100%'}} >
            <li onClick={()=>setFilter('lowest')} className="hover:bg-blue-400 hover:text-white w-full cursor-pointer rounded-md p-1">Lowest</li>
            <li onClick={()=>setFilter('highest')}  className="hover:bg-blue-400 hover:text-white w-full cursor-pointer rounded-md p-1 " >Highest</li>
          </ul>
         }
      </div>
    );
};

export default FilterButton;