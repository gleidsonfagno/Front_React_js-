# Front_React_js

estudos de react js

```bash
nps create-react-app

npm start
```

![estrutura_de_pasta](public/img/estrutura_de_pasta.png)

## Criando componentes

```javascript
import Post from "../Post";

function Article() {
  return (
    <>
      <h1>Article</h1>
      <Post />
    </>
  );
}

export default Article;
```

## Props Componentes

```javascript
// Componente pai
function Pai() {
  return <Filho name="João" />;
}

// Componente filho
function Filho(props) {
  return <p>Olá, {props.name}!</p>;
}

// Renderiza o componente pai
ReactDOM.render(<Pai />, document.getElementById('root'));
```

## JSON Server & API

cria uma aquivo db.json na raiz do projeto;

```javascript
npm install -g json-server

npx json-server --watch db.json --port 4000

// a porta pode ser qualquer uma que nao seja utilizado

```

## Testando API com Thunder Client

fiz o dowload da extensao Thunder Client pra fazer os testes do metos

- GET
- POST
- PATCH
- DELETE

## React Hooks UseState & onClick

```javascript
import React, { useState } from 'react';

function ExampleComponent() {
  // Define um estado para armazenar o valor do contador
  const [counter, setCounter] = useState(0);

  // Função para lidar com o evento onClick
  const handleClick = () => {
    // Atualiza o estado do contador adicionando 1 ao valor atual
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Contador: {counter}</p>
      {/* Botão que dispara a função handleClick quando clicado */}
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}

export default ExampleComponent;
```

## Instalando Axios

[Link para o repositório do Axios](https://github.com/axios/axios)

```bash
npm install axios
```

```javascript
// cria uma pasta em components/pages/services/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
});

export default api;
```
