import { useContext } from "react";
import { products2 } from "../../../src/datas/products";
import Main from "../../Main";
import Card from "./Card";
import "./Home.css"
import { StateContext } from "../../../src/context/Context";
function Home() {


  return (
    <div className="container">
    
      {products2.map((item => <Card key={item.id} item={item} />))}
      <Main />
    </div>
  )
}

export default Home;