import Post from "./Post";
import PostDetails from './PostDetails';

// import React, {useState} from "react";
function PostCards(props) {
  // handle the voting part
  // const [vote, upVote] = useState(posts[i].votes);

  // const voteHandler = () => {
  //   upVote();
  // }

  return (
    <div className="grid col-span-3 md:grid-cols-2 lg:grid-cols-3">
      {PostDetails.map(PostDetails => (
        <div key={PostDetails.body}>
          <Post
          body={PostDetails.body}
          image= {PostDetails.image}
          comments={PostDetails.comments}
          time={PostDetails.time}
          author={PostDetails.author}
          votes={PostDetails.votes}
          subreddit={PostDetails.subreddit}/>
        </div>
      ))}
    </div>
  );
}

export default PostCards;
