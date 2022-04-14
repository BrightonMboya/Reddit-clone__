import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import {useRef} from "react";

function CreatePost() {
    const inputRef = useRef();
  const [enteredPost, setEnteredPost] = useState("");

  const postChangeHandler = (event) => {
    setEnteredPost(event.target.value);
  };

  const createPostHandler = (event) => {
    event.preventDefault();

    const createdPost = {
      postBody: enteredPost,
    };
  };
  return (
    <div>
      <div className="mt-7 mb-4 ml-9">
        <form onSubmit={createPostHandler} className="flex items-center">
          <FaIcons.FaRedditAlien className="fill-red-500 h-8 w-8" />
          <div>
            <input
              placeholder="Create Post"
              type="text"
              onChange={postChangeHandler}
              value={enteredPost}
              className="ml-4 rounded-md w-[30vh]"
            />
          </div>
          <div>
              <input type="file" ref={inputRef} className="display: hidden" />
              <button onClick={() => {
                  inputRef.current.click();
              }} >
                  <FaIcons.FaFileImage className="w-6 h-6 fill-red-500 ml-4 mt-2" />
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
