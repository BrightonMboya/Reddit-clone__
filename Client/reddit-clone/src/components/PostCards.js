import PostStats from "./PostStats";
function PostCards() {
  return (
    <div>
      <div className="mt-5 ml-7 grid grid-flow-col grid-cols-2 mr-5 gap-3">
        {/* first tile of the post card */}
        <div>
          <img
            className="rounded-md shadow-md"
            src={require("../images/img1.png")}
            alt="img-1"
          />

          <h3 className="mt-3 text-lg">
            13 years ago today, a true patriot lost his life. Rest in Peace big
            guy.
          </h3>
          <p className="mt-2 text-gray-500">6 hours ago by</p>
          <p className="text-red-500">the_big_mothergoose</p>

          <p className="text-gray-500">
            /r/<span className="text-red-500">MURICA</span>
          </p>
          <PostStats votes={100} comments={600} />
        </div>

        {/* Second Card and so on and so on */}
        <div>
          <img
            className="rounded-md shadow-md"
            src={require("../images/img2.png")}
            alt="img-1"
          />

          <h3 className="mt-3 text-lg">
            My cousin playing around with talk box.
          </h3>
          <p className="mt-2 text-gray-500">45 minutes ago by</p>
          <p className="text-red-500">bwa_ahki</p>
          <p className="text-gray-500">
            /r/<span className="text-red-500">Music</span>
          </p>
          <PostStats votes={500} comments={400} />
        </div>
      </div>


{/* Second Row */}
      <div className="mt-5 ml-7 grid grid-flow-col grid-cols-2 mr-5 gap-3">
      {/* first tile of the post card */}
      <div>
        <img className="rounded-md shadow-md" src={require("../images/img4.png")} alt="img-1" />

        <h3 className="mt-3 text-lg">
        Angela Merkel reportedly had to explain the 'fundamentals' of EU trade to Trump 11 times
        </h3>
        <p className="mt-2 text-gray-500">7 hours ago by</p>
        <p className="text-red-500">satosaison</p>

        <p className="text-gray-500">/r/<span className="text-red-500">World-news</span></p>
        <PostStats votes={3000} comments={1281}/>
      </div>

      {/* Second Card and so on and so on */}
      <div>
        <img className="rounded-md shadow-md" src={require("../images/img3.png")} alt="img-1" />

        <h3 className="mt-3 text-lg">
        Nice Set
        </h3>
        <p className="mt-2 text-gray-500">8 hours ago by</p>
        <p className="text-red-500">IHaeTypos</p>
        <p className="text-gray-500">/r/<span className="text-red-500">whitepeoplegifs</span></p>
        <PostStats votes={500} comments={400}/>
      </div>

 
    </div>
    </div>
  );
}

export default PostCards;
