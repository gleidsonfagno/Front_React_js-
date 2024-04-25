import Header from "./components/Header";
import Article from "./components/Article";
import { useState } from "react";

function App() {
  let [carrinho, setCarrinho] =  useState(0)
  // carrinho ela tem o valor so nao renderiza
  // setCarrinho essa variavel vai receber a funçao ele recemer o novo valor e vai atualizar

  function Additem() {
    setCarrinho(carrinho + 1)
    console.log(carrinho)

  }

  function RemoveItem() {
    if(carrinho > 0){
      setCarrinho(carrinho - 1)
    }
    console.log(carrinho)

  }

  return (
    <>
      <Header />
      <Article />
      <h1 className="container">Carrinho de compras : {carrinho}</h1>

      <div className="container flex">
        <button className="ml-2 add-button" onClick={Additem}>+</button>
        <button className="ml-2 remove-button" onClick={RemoveItem}>-</button>
      </div>
    </>
  );
}

export default App;
