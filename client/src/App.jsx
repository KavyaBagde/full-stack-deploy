import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err)=>{
        console.error(err.message)
      });
  }, []);

  return (
    <div>
      <h1>Welcome to Typoraft</h1>
      <h3>Greet : {message} </h3>
    </div>
  );
}

export default App;
