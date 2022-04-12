import Post from "./Post";
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';

// import React, {useState} from "react";
function PostCards(props) {
  // handle the voting part
  // const [vote, upVote] = useState(posts[i].votes);

  // const voteHandler = () => {
  //   upVote();
  // }
  const posts = [
    {
      body: "13 years ago today, a true patriot lost his life. Rest in Peace big guy.",
      comments: 500,
      votes: 300,
      time: "6 hours ago by",
      author: "the_big_mothergoose",
      subreddit: "MURICA",
    },

    {
      body: "My cousin playing around with talk box.",
      comments: 500,
      votes: 300,
      time: "45 minutes ago by",
      author: "tbwa_ahki",
      subreddit: "Music",
    },

    {
      body: "Angela Merkel reportedly had to explain the 'fundamentals' of EU trade to Trump 11 times",
      comments: 890,
      votes: 40,
      time: "7 hours ago by",
      author: "satosaison",
      subreddit: "World News",
    },

    {
      body: "Nice Set",
      comments: 50,
      votes: 10,
      time: "45 minutes ago by",
      author: "IHaeTypos",
      subreddit: "whitepeoplegifs",
    },
  ];

  return (
    <div>
      <div className="mt-5 ml-7 grid grid-flow-col grid-cols-2 mr-5 gap-3 md:ml-9 px-10">
        {/* first tile of the post card */}
        <Post
          body={posts[0].body}
          image= {img1}
          comments={posts[0].comments}
          time={posts[0].time}
          author={posts[0].author}
          votes={posts[0].votes}
          subreddit={posts[0].subreddit}
        />

        <Post
          body={posts[1].body}
          image= {img2}
          comments={posts[1].comments}
          votes={posts[1].votes}
          time={posts[1].time}
          author={posts[1].author}
          subreddit={posts[1].subreddit}
        />
      </div>

      {/* Second Row */}
      <div className="mt-8 ml-7 grid grid-flow-col grid-cols-2 mr-5 gap-3 md:ml-9 px-10">
        <Post
          body={posts[2].body}
          image= {img3}
          comments={posts[2].comments}
          votes={posts[2].votes}
          time={posts[2].time}
          author={posts[2].author}
          subreddit={posts[2].subreddit}
        />

        <Post
          body={posts[3].body}
          image= {img4}
          comments={posts[3].comments}
          votes={posts[3].votes}
          time={posts[3].time}
          author={posts[3].author}
          subreddit={posts[3].subreddit}
        />
      </div>

      <div className="mt-8 ml-7 grid grid-flow-col grid-cols-2 mr-5 gap-3 md:ml-9 px-10">
        <Post
          body={posts[2].body}
          image= {img1}
          comments={posts[2].comments}
          votes={posts[2].votes}
          time={posts[2].time}
          author={posts[2].author}
          subreddit={posts[2].subreddit}
        />

        <Post
          body={posts[3].body}
          comments={posts[3].comments}
          votes={posts[3].votes}
          image= {img2}
          time={posts[3].time}
          author={posts[3].author}
          subreddit={posts[3].subreddit}
        />
      </div>
    </div>
  );
}

export default PostCards;
