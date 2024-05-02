import { useState } from "react";

export function Usestate() {
  const [tarefa, setTarefa] = useState([
    "ACORDAR",
    "ESTUDAR",
    "REACTJS",
    "PYTHON JS",
  ]);
//   console.log(setTarefa)

  const [campo, setCampo] = useState("")

  function AdicionarItem(){
    setTarefa([...tarefa, campo])
    setCampo("")
  }

  function handleCampo(e) {
    setCampo(e.target.value)
    console.log(campo)
  }
  return (
    <div>
      <h1>useState</h1>
      <ul>
        {tarefa.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ul>

      <input
        type="text"
        value={campo}
        name="name"
        onChange={handleCampo}
      />
      <button type="button" onClick={AdicionarItem} onEnded={AdicionarItem}>adicionar +</button>
    </div>
  );
}

