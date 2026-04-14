import { useState } from "react";
import "./App.css";
import Post from "./Component/Post";
import SearchInput from "./Component/SearchInput";
import SearchBtn from "./Component/SearchBtn";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  function showOutPut() {
    console.log(searchQuery);
    // console.log();
  }
  return (
    <div>
      <SearchInput setSearchQuery={setSearchQuery} />
      <SearchBtn handleSearch={showOutPut} />
    </div>
  );
}

export default App;
