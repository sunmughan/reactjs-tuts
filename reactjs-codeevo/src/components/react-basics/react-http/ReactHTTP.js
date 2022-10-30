import PostList from "./http/PostList";
import PostForm from "./http/PostForm";

const ReactHTTP = () => {
  return (
    <>
      {/* POST REQUEST IN REACT JS */}
      <PostForm />
      {/* GET REQUEST IN REACT JS */}
      <PostList />
    </>
  );
};

export default ReactHTTP;
