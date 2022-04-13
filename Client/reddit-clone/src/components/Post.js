import React from "react";
import PostStats from "./PostStats";

function Post (props) {
  return (
    <div>
      <div className="mt-5 ml-7 px-5">
        <img
          className="rounded-md shadow-md"
          src={process.env.PUBLIC_URL + props.image}
          // src = {require({props.image})}
          alt="img-1"
        />

        <h3 className="mt-3 text-lg">{props.body}</h3>
        <p className="mt-2 text-gray-500">{props.time}</p>
        <p className="text-red-500">{props.author} </p>

        <p className="text-gray-500">
          /r/<span className="text-red-500">{props.subreddit} </span>
        </p>
        <PostStats votes={props.votes} comments={props.comments} />
      </div>
    </div>
  );
};

export default Post;
