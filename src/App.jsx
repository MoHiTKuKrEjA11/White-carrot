import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./Login";
import Calendar from "./Calendar";  // Component to display events

const clientId = "96709536590-sk8rp1h2q5rlddairlqdl1599mh0c22j.apps.googleusercontent.com";

function App() {
  const [token, setToken] = useState("");

  const handleLoginSuccess = (accessToken) => {
    setToken(accessToken);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        {!token ? (
          <Login onSuccess={handleLoginSuccess} />
        ) : (
          <Calendar token={token} /> 
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
