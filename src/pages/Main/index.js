import Post from "../../components/Post";
import { useState } from "react";
import api from "../../services/api";

const Main = () => {
  const [post, setPost] = useState([]);

  async function handleAxios() {
    try {
      const response = await api.get("/posts");

      setPost(response.data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h1>Main.js</h1>
        <button onClick={handleAxios}>fazer requisiçao</button>

        <div className="mt-5 container-posts ">
          {post.map((post, index) => {
            return (
              <>
                <Post key={index} subtitle={post.category} title={post.title}>
                  {post.description}
                </Post>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Main;
