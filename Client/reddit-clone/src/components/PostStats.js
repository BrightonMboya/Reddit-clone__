import * as FaIcons from "react-icons/fa";

const PostStats = (props) => {
  // this component accepts number of votes and number of comments as props
  return (
    <div className="grid grid-cols-2">
      <div className="mt-2">
        <img
          className="ml-1"
          src={require("../images/upVote.png")}
          alt="img-2"
        />
        <p className="text-sm text-gray-500">{props.votes}</p>
        <img
          className="ml-1"
          src={require("../images/downVote.png")}
          alt="img-1"
        />
      </div>

      <div className="py-4 mr-3 flex items-stretch">
        <FaIcons.FaCommentAlt className="fill-gray-500 w-4 h-4 mt-1 mr-2" size="25px"/>
        <p className="text-sm text-gray-500  md:ml-5">{props.comments}</p>
      </div>
    </div>
  );
};

export default PostStats;
