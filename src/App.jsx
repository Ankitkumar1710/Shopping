import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

import CardBody from "./components/cards/CardBody";
import "./App.css";
import Slider from "./components/header/Header";

const App = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    
    fetch("https://www.jebelz.com/ae_en/search/ajax/suggest/?q=coffee&_=1677667865353")
    // https://fakestoreapi.com/products/
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("hi");
  }, []);
  function changingSrarchData(e) {
    setSearchValue(e.target.value);
  }
  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }
  // console.log(addedItems);
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
    // console.log(addedItems);
  }
  return (
    <>


    
    <div>
      {/* <Header /> */}
   <div className="body__container">
        <div className="nav">
          {/* <Header /> */}
          <div className="nav-right">
            <Search
              products={items}
              value={searchValue}
              onChangeData={changingSrarchData}
            />
            {/* <Button num={addedItems.length} click={setShowAddProducts} /> */}
          </div>
        </div>
        <Slider/>
        {/* {showAddProducts && (
          <AddProducts
            click={setShowAddProducts}
            items={addedItems}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
          />
        )} */}
        
        <CardBody
          products={itmesFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
        <Slider/>
      </div>
    </div>
    </>
  );
};

export default App;
