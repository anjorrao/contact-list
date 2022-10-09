import { useState, useEffect } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=25")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <>
      <h1>CONTACT INFORMATION PAGE</h1>
      {results.map((result) => (
        <Contact user={result}></Contact>
      ))}
    </>
  );
}

export default App;
