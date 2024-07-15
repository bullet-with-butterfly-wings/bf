import { useState, useEffect } from 'react'
import './App.css'
import LoginButton from './components/login'
import { gapi } from 'gapi-script';

const clientId = "147418774980-q4reanmtjdpposq68lveb4g5kiccde4o.apps.googleusercontent.com";

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Login</h1>
        <LoginButton />
      </header>
    </div>
  );
}

export default App
