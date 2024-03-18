import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {
   
  },
});

const postListReducer = (currentPostList, action) => {
  return currentPostList;
};

const PostListProvider = ({ children }) => {
  // const [state, diapatch] = useReducer(reducerFunction, defaultValue);
  // const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_CONTEXT);
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {};
  const deletePost = (postId) => {
    console.log(`Delete Post Called for ${postId}`)
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Pakistan",
    body: "Hi Friends, I am going to Pakistan for my vacations, Hope to Enjoy a lot. Peace out",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Pakistan", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho gaye bhai",
    body: "char saal ki masti ky baad bi ho gaye hy pass",
    reactions: 100,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListProvider;
