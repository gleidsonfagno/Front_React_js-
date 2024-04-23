# Front_React_js

estudos de react js

```bash
nps create-react-app

npm start
```

![estrutura_de_pasta](public/img/estrutura_de_pasta.png)

## Crindo componentes

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
