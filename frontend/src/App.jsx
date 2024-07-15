import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [data, setData] = useState(null);
  /*
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
    <LoginButton />
  });
  */
  useEffect(() => {
    fetch('/api/auth-url')
    .then((res) => res.text())
    .then((url) => setData(url));  
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Login</h1>
        <a href={data} className="btn btn-primary">Sign up</a>
      </header>
    </div>
  );
}

export default App
