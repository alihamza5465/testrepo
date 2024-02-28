import React, { useState } from "react";
// import Navbar from "./component/Navbar";
// import Resturent from "./component/Resturent";
// import Menu from "./component/MenuApi";
import "./component/Nav.css";
import Counter from "./component/project 2/Counter";

const App = () => {
  //This is Resturent project
  // const [data, setData] = useState(Menu);
  // const filterItem = (category) => {
  //   const updateData = Menu.filter((curElm) => {
  //     return curElm.category === category;
  //   });
  //   setData(updateData);
  // };
  // return (
  //   <>
  //     <Navbar filterItem={filterItem} Menu={Menu} setData={setData} />
  //     <Resturent userdata={data} />
  //   </>
  // );
  return (
    <>
      <Counter />
    </>
  );
};

export default App;
