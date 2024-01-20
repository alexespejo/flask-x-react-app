import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
 const [data, setData] = useState({});

 useEffect(() => {
  // Fetch data from Flask API
  fetch("http://127.0.0.1:5000/api/data")
   .then((response) => response.json())
   .then((data) => setData(data))
   .catch((error) => console.error("Error fetching data:", error));
 }, []);

 return (
  <div className="App">
   <header className="App-header">
    <h1>React App</h1>
    <p>Data from Flask API: {data.message}</p>
   </header>
  </div>
 );
}

export default App;
