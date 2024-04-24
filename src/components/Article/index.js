import Post from "../Post";

function Article() {
  return (
    <section className="container">
      <h1>Article</h1>
      <div className="mt-3 container-posts flex">
        <Post subtitle="Tecnologia" title="O guia definitivo sobre blog">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, lectus in ornare facilisis, justo nunc elementum nisl,
          eget congue libero ligula eu leo. In dapibus hendrerit nisi, nec
          consectetur leo convallis ut.
        </Post>

        <Post subtitle="Fotografia" title="Quais as melhors câmeras em 2021">
          2lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, lectus in ornare facilisis, justo nunc elementum nisl,
          eget congue libero ligula eu leo. In dapibus hendrerit nisi, nec
          consectetur leo convallis ut.
        </Post>
        <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria.">
          3lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, lectus in ornare facilisis, justo nunc elementum nisl,
          eget congue libero ligula eu leo. In dapibus hendrerit nisi, nec
          consectetur leo convallis ut.
        </Post>
      </div>
    </section>
  );
}

export default Article;
