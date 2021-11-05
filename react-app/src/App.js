import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/session";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
// import Musician from './components/Musician';
// import MusiciansList from "./components/MusiciansList";
// import MusicianForm from "./components/MusicianForm";
import ImageUpload from "./components/ImageUpload";
import MusicianRefactor from "./components/MusicianRefactor";
import MusiciansListRefactor from "./components/MusiciansListReFactor";
import MusicianFormRefactor from "./components/MusicianFormRefactor";

function App() {
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/new-artist" exact={true}>
          <MusicianFormRefactor />
        </ProtectedRoute>
        <ProtectedRoute path="/musicians" exact={true}>
          <MusiciansListRefactor />
        </ProtectedRoute>
        <ProtectedRoute path="/musicians/:musicianId" exact={true}>
          <MusicianRefactor />
        </ProtectedRoute>
        <ProtectedRoute path="/musicians/<int:id>/image" exact={true}>
          <ImageUpload />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
