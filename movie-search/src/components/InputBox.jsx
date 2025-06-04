import { useState } from "react";

export function InputBox({onSearch}) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value;
        onSearch(inputValue.trim());
        console.log(keyword);
    };
    
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="keyword" name="keyword" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}></input>
      <button type="submit">Search</button>
    </form>
  );
}
