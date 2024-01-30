import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import RecentProductCard from "./RecentProductCard";
import "react-tabs/style/react-tabs.css";

const RecentProduct = () => {
  const [toySubCategory, setToySubCategory] = useState([]);
  const [category, setCategory] = useState("car");
  useEffect(() => {
    console.log(category);
    fetch(`http://localhost:8000/all-toys/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToySubCategory(data);
      });
  }, [category]);
  return (
    <div className="bg-gray-100" style={{zIndex:"0"}}>
      <Tabs style={{zIndex:"0"}}>
        <TabList style={{fontSize:"25px",color:"#0062BD",fontWeight:"700"}}>
          <Tab onClick={() => setCategory("car")}>Car</Tab>
          <Tab onClick={() => setCategory("lego")}>Lego</Tab>
          <Tab onClick={() => setCategory("superhero")}>Super hero</Tab>
        </TabList>
        <TabPanel style={{zIndex:"0"}}>
          <div className="grid md:grid-cols-3 gap-4 items-center">
            {category === "car" &&
              toySubCategory.slice(0, 4).map((item) => {
                return (
                  <RecentProductCard
                  style={{zIndex:"0"}}
                    key={item._id}
                    toyInfo={item}
                  ></RecentProductCard>
                );
              })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-4 items-center">
            {category === "lego" &&
              toySubCategory.slice(0, 5).map((item) => {
                return (
                  <RecentProductCard
                    key={item._id}
                    toyInfo={item}
                  ></RecentProductCard>
                );
              })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-4 items-center">
            {category === "superhero" &&
              toySubCategory.slice(0, 6).map((item) => {
                return (
                  <RecentProductCard
                    key={item._id}
                    toyInfo={item}
                  ></RecentProductCard>
                );
              })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RecentProduct;
