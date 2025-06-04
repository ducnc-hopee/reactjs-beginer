import { useState } from 'react'
import './App.css'
import { InputBox } from './components/inputBox'
import { MovieList } from './services/movie-search'

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSearch = (keyword) =>{
    setSearchKeyword(keyword);
  }

  return (
    <>
      <div>
        <h1>
          Movie Search Page
        </h1>
        <InputBox onSearch={handleSearch}/>
        <MovieList searchKeyword={searchKeyword}/>
      </div>
    </>
  )
}

export default App
