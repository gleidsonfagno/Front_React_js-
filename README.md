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
ReactDOM.render(<Pai />, document.getElementById("root"));
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
import React, { useState } from "react";

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

## Listando os Posts com API

```javascript
// Este é um exemplo de componente React que faz uma requisição GET para uma API de posts
// ao clicar em um botão e exibe os posts em um contêiner na página.

// Importa os hooks useState e useEffect do React, e o Axios para fazer requisições HTTP.
import React, { useState } from "react";
import axios from "axios";

// Define o componente Main, que faz a requisição à API e exibe os posts.
const Main = () => {
  // Define o estado 'post' para armazenar os posts da API.
  const [post, setPost] = useState([]);

  // Função assíncrona para fazer a requisição à API e atualizar o estado 'post'.
  async function handleAxios() {
    try {
      const response = await axios.get("/posts"); // Faz a requisição GET para a API de posts.
      setPost(response.data); // Atualiza o estado 'post' com os dados dos posts.
      console.log(response); // Exibe os dados da resposta no console.
    } catch (error) {
      console.log(error); // Exibe um erro no console, caso ocorra algum problema na requisição.
    }
  }

  // Renderiza o componente na tela.
  return (
    <>
      <section className="container">
        <h1>Main.js</h1>
        <button onClick={handleAxios}>fazer requisição</button> {/* Botão para fazer a requisição à API. */}
        <div className="mt-5 container-posts">
          {/* Mapeia sobre o array de 'post' e renderiza cada post utilizando o componente 'Post'. */}
          {post.map((post) => (
            <Post key={post.id} subtitle={post.category} title={post.title}>
              {post.description}
            </Post>
          ))}
        </div>
      </section>
    </>
  );
};

// Exporta o componente Main para ser utilizado em outros arquivos.
export default Main;

```

O efeito useEffect é usado para fazer uma chamada de API após a primeira renderização e atualizar o estado com os dados recebidos.

```javascript

useEffect(() => {
    api.get("/posts")
    .then((response) => {
      console.log(response.data)
      setPost(response.data)
    })
  }, [])

```
