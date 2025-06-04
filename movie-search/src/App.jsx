import { useState } from 'react'
import './App.css'
import { InputBox } from './components/InputBox'; 
import { Display } from './components/Display';

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
        <Display searchKeyword={searchKeyword}/>
      </div>
    </>
  )
}

export default App
