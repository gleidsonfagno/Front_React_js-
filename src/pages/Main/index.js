import Post from "../../components/Post";
import { useEffect, useState } from "react";
import api from "../../services/api";
// import { Usestate } from "../Usestate";
import { Useeffect } from "../../components/Useeffect";


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
        <h2 className="mt-3">Página Pricipal</h2>

        <Useeffect />
        {/* <Usestate /> */}

        <div className="mt-5 container-posts ">
          {post.map((post) => {
            return (
              <>
                <Post 
                   key={post.id} 
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
