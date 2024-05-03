import { useState, useEffect } from "react";

export function Useeffect() {
  const [tarefa, setTarefa] = useState([]);
  //   console.log(setTarefa)

  const [campo, setCampo] = useState("");

  function AdicionarItem() {
    setTarefa([...tarefa, campo]);
    setCampo("");
  }

  function handleCampo(e) {
    setCampo(e.target.value);
  }

  // funciona como componente didMout
  useEffect(() => {
    const tarefasStorage = localStorage.getItem("Array_de_tarefas");

    if (tarefasStorage) {
      setTarefa(JSON.parse(tarefasStorage));
    }
  }, []); // Array de dependência vazia para a carga inicial

  // funciona como componente DidUpdate
  useEffect(() => {
    localStorage.setItem("Array_de_tarefas", JSON.stringify(tarefa));
  }, [tarefa]); // Observar as mudanças no estado `tarefa` e atualizar o armazenamento local

  return (
    <div>
      <h1>Vamos falar sobre Useeffect</h1>
      <ul>
        {tarefa.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ul>

      <input type="text" value={campo} name="name" onChange={handleCampo} />
      <button type="button" onClick={AdicionarItem} onEnded={AdicionarItem}>
        adicionar +
      </button>
    </div>
  );
}
