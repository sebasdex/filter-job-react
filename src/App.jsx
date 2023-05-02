import Header from "./components/Header"
import Search from "./components/Search"
import List from "./components/List"
import { useState } from "react"
function App() {
  const [tags, setTags] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  function selectTag(tagName) {
    setTags([...tags, tagName]);
  }
  function resetFilter(reset){
    setFilterValue(reset);
  }

  return (
    <>
      <Header />
      {tags.length > 0 ? <Search 
      tags={tags} 
      setTags={setTags}
      resetFilter={resetFilter} /> : []}
      <List
        selectTag={selectTag}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
         />
    </>
  )
}

export default App
