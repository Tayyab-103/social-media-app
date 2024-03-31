import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList } = useContext(PostListData);
  // console.log(postList,"Post Update")


  const handleGetPostsClick = () =>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(console.log);
  }
  return (
    <>
    { postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick}/>}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}

    </>
  );
};

export default PostList;
