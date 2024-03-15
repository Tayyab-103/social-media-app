import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  delete: () => {},
});

const PostListProvider = ({ children }) => {
  // const [state, diapatch] = useReducer(reducerFunction, defaultValue);
  const [postList, dispatchPostList] = useReducer();
  return <PostList.Provider value={[]}>{children}</PostList.Provider>;
};

export default PostListProvider;
