import "./App.css";
import NavBar from "./components/NavBar";
import PostCards from "./components/PostCards";
import CreatePost from "./components/Post/CreatePost";

function App() {

  return (
    <div className="">
      <NavBar />
      <CreatePost/>
      <PostCards />


    </div>
  );
}

export default App;
