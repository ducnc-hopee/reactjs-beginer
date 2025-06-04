// import React from "react";
// import ReactDOM  from 'react-dom/client';

// // import { useTimeCounter } from "./hooks/useTimeCounter";
// import TimeCounter from "./components/TimeCounter";

// const App = () => { 
//     return <TimeCounter />;
// };

// export default App;


import React from "react";
import ReactDOM  from 'react-dom/client';
import { App }  from "./components/TimeCounter";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);