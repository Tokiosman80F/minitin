import category1 from "../../../assets/images/categories/category-1.png";
import category3 from "../../../assets/images/categories/category-3.png";
import category4 from "../../../assets/images/categories/category-4.png";
import category7 from "../../../assets/images/categories/category-7.png";
import category6 from "../../../assets/images/categories/category-6.png";

const Categories = () => {
  const categoriesImg = [
    { img: category1, text: "Exclusives", bgColor: "bg-blue-500 " },
    { img: category3, text: "Hero", bgColor: "bg-green-500" },
    { img: category4, text: "New", bgColor: "bg-yellow-500" },
    { img: category7, text: "Block", bgColor: "bg-green-500" },
    { img: category6, text: "Car", bgColor: "bg-red-500" },
  ];

  return (
    <div className="container">
      <div className="flex items-center justify-around">
        {categoriesImg.map((category, index) => (
          <div key={index} >
            <div className={`relative w-32 h-32 ${category.bgColor } rounded-full `}>
              <img
                src={category.img}
                alt=""
                className={`absolute h-full w-full  object-fill -top-7  `}
              />
            </div>
            <p className="text-center z-20 relative font-bold">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
