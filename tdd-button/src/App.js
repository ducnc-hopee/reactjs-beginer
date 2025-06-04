import React from "react";
import  Button  from "./Button"

const App = () => {
    const handleClick = () => alert('The button have been clicked!')
    return (
        <div className="p-4">
            <Button oncClick={handleClick}>Click me</Button>
            <Button disabled>Disable Button</Button>
            <Button className="bg-green-500">Edit Button</Button>
        </div>
    );
};

export default App;