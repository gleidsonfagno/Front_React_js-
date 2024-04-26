import Post from "../../components/Post";
import { useEffect, useState } from "react";
import api from "../../services/api";

const Main = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    api.get("/posts")
    .then((response) => {
      console.log(response.data)
      setPost(response.data)
    })
  }, [])


  return (
    <>
      <section className="container">
        <h2 className="mt-3">Article</h2>
        {/* <button onClick={handleAxios}>fazer requisiçao</button> */}

        <div className="mt-5 container-posts ">
          {post.map((post, index) => {
            return (
              <>
                <Post 
                   key={index} 
                   subtitle={post.category} 
                   title={post.title}
                   author={post.author}
                   date={post.date}
                  >
                  {post.resume}
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
