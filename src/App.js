import "./App.css";
import axios from "axios"; //es6 syntax
import { useEffect, useState } from "react";
import RenderProductData from "./renderProductData";
import Topbar from "./topbar";
import fruit from "./fruit.jpg";

//this line is bascially es5 syntax
// const axios = require('axios').default;

//parent component
function App() {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0"
      )
      .then((data) => {
        setProductData(data.data);
      });
  }, []);

  return (
    <div className="App">
      <Topbar />
      <img className="fruitimg" src={fruit}/>
      {productData && <RenderProductData data={productData.store_items} />}
    </div>
  );
}

export default App;
