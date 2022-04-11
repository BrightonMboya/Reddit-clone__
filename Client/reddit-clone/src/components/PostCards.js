import PostStats from "./PostStats";

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
        <div>
          <img
            className="rounded-md shadow-md"
            src={require("../images/img1.png")}
            alt="img-1"
          />

          <h3 className="mt-3 text-lg">
            {posts[0].body}
          </h3>
          <p className="mt-2 text-gray-500">{posts[0].time}</p>
          <p className="text-red-500">{posts[0].author} </p>

          <p className="text-gray-500">
            /r/<span className="text-red-500">{posts[0].subreddit} </span>
          </p>
          <PostStats votes={posts[0].votes} comments={posts[0].comments} />
        </div>

        {/* Second Card and so on and so on */}
        <div>
          <img
            className="rounded-md shadow-md"
            src={require("../images/img2.png")}
            alt="img-1"
          />

          <h3 className="mt-3 text-lg">
          {posts[1].body}
          </h3>
          <p className="mt-2 text-gray-500">{posts[1].time}</p>
          <p className="text-red-500">{posts[1].author}</p>
          <p className="text-gray-500">
            /r/<span className="text-red-500">{posts[1].subreddit}</span>
          </p>
          <PostStats votes={posts[1].votes} comments={posts[1].comments} />
        </div>
      </div>

      {/* Second Row */}
      <div className="mt-8 ml-7 grid grid-flow-col grid-cols-2 mr-5 gap-3 md:ml-9 px-10">
        {/* first tile of the post card */}
        <div>
          <img
            className="rounded-md shadow-md"
            src={require("../images/img4.png")}
            alt="img-1"
          />

          <h3 className="mt-3 text-lg">
          {posts[2].body}
          </h3>
          <p className="mt-2 text-gray-500">{posts[2].time}</p>
          <p className="text-red-500">{posts[2].author}</p>

          <p className="text-gray-500">
            /r/<span className="text-red-500">{posts[2].subreddit}</span>
          </p>
          <PostStats votes={posts[2].votes} comments={posts[2].comments} />
        </div>

        {/* Second Card and so on and so on */}
        <div>
          <img
            className="rounded-md shadow-md"
            src={require("../images/img3.png")}
            alt="img-1"
          />

          <h3 className="mt-3 text-lg">{posts[3].body}</h3>
          <p className="mt-2 text-gray-500">{posts[3].time}</p>
          <p className="text-red-500">{posts[3].author}</p>
          <p className="text-gray-500">
            /r/<span className="text-red-500">{posts[3].subreddit} </span>
          </p>
          <PostStats votes={posts[3].votes} comments={posts[3].comments} />
        </div>
      </div>

      <div className="mt-8 ml-7 grid grid-flow-col grid-cols-2 mr-5 gap-3 md:ml-9 px-10">
        {/* first tile of the post card */}
        <div>
          <img
            className="rounded-md shadow-md"
            src={require("../images/img4.png")}
            alt="img-1"
          />

          <h3 className="mt-3 text-lg">
          {posts[2].body}
          </h3>
          <p className="mt-2 text-gray-500">{posts[2].time}</p>
          <p className="text-red-500">{posts[2].author}</p>

          <p className="text-gray-500">
            /r/<span className="text-red-500">{posts[2].subreddit}</span>
          </p>
          <PostStats votes={posts[2].votes} comments={posts[2].comments} />
        </div>

        {/* Second Card and so on and so on */}
        <div>
          <img
            className="rounded-md shadow-md"
            src={require("../images/img3.png")}
            alt="img-1"
          />

          <h3 className="mt-3 text-lg">{posts[3].body}</h3>
          <p className="mt-2 text-gray-500">{posts[3].time}</p>
          <p className="text-red-500">{posts[3].author}</p>
          <p className="text-gray-500">
            /r/<span className="text-red-500">{posts[3].subreddit} </span>
          </p>
          <PostStats votes={posts[3].votes} comments={posts[3].comments} />
        </div>
      </div>
    </div>
  );
}

export default PostCards;
