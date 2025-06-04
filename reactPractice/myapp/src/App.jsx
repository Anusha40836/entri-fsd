import React from "react";
import Counter from "./components/Counter";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import WeatherApp from "./components/weather";
import OnClickEvent from "./components/OnClickEvent";
import ToggleText from "./components/ToggleText";
import UsersList from "./components/UsersList";
import LoginForm from "./components/LoginForm";
import AuthToggle from "./components/AuthToggle";
import NameForm from "./components/NameForm";
import NameList from "./components/NameList";
import SignupForm from "./components/SignupForm";
import Welcome from "./components/Welcome";
import FetchingData from "./components/FetchingData";
import Logger from "./components/Logger";
import FocusInput from "./components/FocusInput";
import ExpensiveCalc from "./components/ExpensiveCalc";
import FormPreview from "./components/FormPreview";
import QuoteFetcher from "./components/QuoteFetcher";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import RegistrationForm from "./components/RegistrationForm";
import { UserContext } from "./components/UserContext";
import UserProfile from "./components/UserProfile";
import CounterEffect from "./components/CounterEffect";
import User from "./components/User";
import ClearFocusInput from "./components/ClearFocusInput";
import ParentComponent from "./components/ParentComponent";
import ContactManager from "./components/ContactManager";
function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <List /> */}
      {/* <TodoItem /> */}
      {/* <WeatherApp /> */}
      {/* <OnClickEvent /> */}
      {/* <ToggleText /> */}
      {/* <AuthToggle /> */}
      {/* <UsersList /> */}
      {/* <LoginForm /> */}
      {/* <NameForm /> */}
      {/* <NameList /> */}
      {/* <SignupForm /> */}
      {/* <Welcome name="RoohiAnshu" isLogin={true} /> */}
      {/* <FetchingData /> */}
      {/* <Logger /> */}
      {/* <FocusInput /> */}
      {/* <ExpensiveCalc /> */}
      {/* <FormPreview /> */}
      {/* <QuoteFetcher /> */}
      {/* <RegistrationForm /> */}
      {/* <CounterEffect /> */}
      {/* <ClearFocusInput /> */}
      {/* <ParentComponent /> */}
      <ContactManager />

      <UserContext.Provider value={{ name: "Anusha", role: "MERN dev" }}>
        <UserProfile />
      </UserContext.Provider>

      <BrowserRouter>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/user">User</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user/:name" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
