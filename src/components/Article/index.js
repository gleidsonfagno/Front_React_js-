import Post from "../Post";

function Article() {
  return (
    <section className="container">
      <h1>Article</h1>
      <div className="mt-3 container-posts flex">
      <Post />
      <Post />
      <Post />
      </div>
    </section>
  );
}

export default Article;
