import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // console.log("fetch started");

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setLoading(false);
        // console.log("fetch returned");
      });
    // console.log("fetch ended");

    return () => {
      console.log("Cleaning the useEffect");
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="spinner">{loading && <LoadingSpinner />}</div>
      {!loading && postList.length === 0 && <WelcomeMessage />}
      {!loading && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
