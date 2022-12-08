//pkgs
import React from 'react';
import {ApolloProvider} from "@apollo/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {NavLink} from 'react-router-dom';
import {AuthProvider} from "./utils/auth";

//pages
import Caution from "./pages/Caution";
import CharacterCreate from "./pages/CharacterCreate";
import CharacterSheet from "./pages/CharacterSheet";
import ForgotPassword from "./pages/ForgotPW";
import Login from "./pages/Login";
import QuestBoard from "./pages/QuestBoard";
import QuestDetails from "./pages/QuestDetails";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <ApolloProvider client ={client}>
      <Router>
        <AuthProvider>
          <NavLink>
          style={{ textDecoration: "none", color: "black" }} to="/">
            <h1 style={{ textAlign: "center" }}>
              Home
            </h1>
          </NavLink>
          <Routes>
            <Route path="/" element={QuestBoard} />
            <Route path="/Caution" element={Caution} />
            <Route path="/CharacterCreate" element={CharacterCreate} />
            <Route path="/CharacterSheet" element={CharacterSheet} />
            <Route path="/ForgotPassword" element={ForgotPassword} />
            <Route path="/Login" element={Login} />
            <Route path="/UserProfile" element={UserProfile} />
            {/* quest details will need id attached at later point after testing */}
            <Route path="/QuestDetails" element={QuestDetails} />
            <Route path="/Signup" element={Signup} />
          </Routes>
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
